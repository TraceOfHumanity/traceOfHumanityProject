import {clear} from "console";
import {db} from "firebase.config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";

import {setAllCategories} from "../redux/slices/dashboard";
import {setHasMorePosts, setLastPost, setPosts} from "../redux/slices/library";
import {setIsLoading} from "../redux/slices/loader";
import {useAppDispatch, useAppSelector} from "./useReduxToolkit";

interface IFirebase {
  newPost: (
    title: string,
    description: string,
    imageUrl: string | null,
    createdAt: Date,
    category?: string[],
    likes?: number,
    views?: number,
  ) => Promise<void>;

  newCategory: (name: string) => Promise<void>;

  getAllCategories: () => Promise<void>;

  getAllPosts: (startAfterPost?: any) => Promise<void>;
  getPostsByCategory: (category: string, startAfterPost?: any) => Promise<void>;
  getOnePost: (id: string) => Promise<any>;
  updatePost: (id: string, data: any) => Promise<void>;
}

export const useFirebase = () => {
  const dispatch = useAppDispatch();
  const {posts, postsPerLoad} = useAppSelector((state) => state.library);
  const postsCollectionRef = collection(db, "posts");
  const categoriesCollectionRef = collection(db, "categories");

  const createPost: IFirebase["newPost"] = async (
    title,
    description,
    imageUrl,
    createdAt,
    categories,
    views,
  ) => {
    await addDoc(postsCollectionRef, {
      title,
      description,
      imageUrl,
      createdAt,
      categories,
      views,
    });
  };

  const createCategory: IFirebase["newCategory"] = async (name) => {
    await addDoc(categoriesCollectionRef, {
      name,
    });
  };

  const getAllCategories = async () => {
    const categories = await getDocs(categoriesCollectionRef);
    dispatch(setAllCategories(categories.docs.map((doc) => doc.data())));
  };

  const getAllPosts: IFirebase["getAllPosts"] = async (startAfterPost) => {
    const responsePosts: any[] = [];
    dispatch(setIsLoading(true));

    const firstPostsQuery = query(
      postsCollectionRef,
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
    );

    const postsQuery = query(
      postsCollectionRef,
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
      startAfter(startAfterPost),
    );

    const postsSnapshot = startAfterPost
      ? await getDocs(postsQuery)
      : await getDocs(firstPostsQuery);
    dispatch(setLastPost(postsSnapshot.docs[postsSnapshot.docs.length - 1]));
    if (postsSnapshot.docs.length < postsPerLoad) {
      dispatch(setHasMorePosts(false));
    }
    postsSnapshot.docs.forEach((doc) => {
      responsePosts.push({...doc.data(), id: doc.id});
    });

    dispatch(setPosts([...posts, ...responsePosts]));
  };

  const getPostsByCategory: IFirebase["getPostsByCategory"] = async (
    category,
    startAfterPost,
  ) => {
    const responsePosts: any[] = [];
    dispatch(setIsLoading(true));

    console.log("category", category);
    console.log("startAfterPost", startAfterPost);
    const firstPostsQuery = query(
      postsCollectionRef,
      where("categories", "array-contains", category),
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
    );

    const postsQuery = query(
      postsCollectionRef,
      where("categories", "array-contains", category),
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
      startAfter(startAfterPost),
    );

    const postsSnapshot = startAfterPost !== null
      ? await getDocs(postsQuery)
      : await getDocs(firstPostsQuery);
    dispatch(setLastPost(postsSnapshot.docs[postsSnapshot.docs.length - 1]));
    if (postsSnapshot.docs.length < postsPerLoad) {
      dispatch(setHasMorePosts(false));
    }
    postsSnapshot.docs.forEach((doc) => {
      responsePosts.push({...doc.data(), id: doc.id});
    });

    console.log("responsePosts", responsePosts);

    // dispatch(setPosts([...posts, ...responsePosts]));
    dispatch(setPosts([...responsePosts]));
  };

  const getOnePost: IFirebase["getOnePost"] = async (id) => {
    const postRef = doc(db, "posts", id);
    const post = await getDoc(postRef);
    return post.data();
  };

  const updatePost = async (id: string, data: any) => {
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, data);
  };

  return {
    createPost,
    createCategory,
    getAllCategories,
    getAllPosts,
    getPostsByCategory,
    getOnePost,
    updatePost,
  };
};

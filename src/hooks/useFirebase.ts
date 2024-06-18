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
import {get} from "http";

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
  getPosts: (category: string, startAfterPost?: any) => Promise<void>;
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

  const getOnePost: IFirebase["getOnePost"] = async (id) => {
    const postRef = doc(db, "posts", id);
    const post = await getDoc(postRef);
    return post.data();
  };

  const updatePost = async (id: string, data: any) => {
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, data);
  };

  const getPosts: IFirebase["getPosts"] = async (category, startAfterPost) => {
    console.log("getPosts");
    const responsePosts: any[] = [];
    dispatch(setIsLoading(true));

    const firstPostsQuery = query(
      postsCollectionRef,
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
    );

    const firstPostsQueryWithCategories = query(
      postsCollectionRef,
      where("categories", "array-contains", category),
      orderBy("createdAt", "desc"),
      limit(3),
    );

    const postsQuery = query(
      postsCollectionRef,
      orderBy("createdAt", "desc"),
      limit(postsPerLoad),
      startAfter(startAfterPost),
    );

    const postsQueryWithCategories = query(
      postsCollectionRef,
      where("categories", "array-contains", category),
      orderBy("createdAt", "desc"),
      limit(3),
      startAfter(startAfterPost),
    );

    const postsSnapshot = startAfterPost
      ? await getDocs(postsQuery)
      : await getDocs(firstPostsQuery);

    const postsSnapshotWithCategories = startAfterPost
      ? await getDocs(postsQueryWithCategories)
      : await getDocs(firstPostsQueryWithCategories);

    dispatch(
      setLastPost(
        category
          ? postsSnapshotWithCategories.docs[
              postsSnapshotWithCategories.docs.length - 1
            ]
          : postsSnapshot.docs[postsSnapshot.docs.length - 1],
      ),
    );

    if (category) {
      if (postsSnapshotWithCategories.docs.length < postsPerLoad) {
        dispatch(setHasMorePosts(false));
      }
    } else {
      if (postsSnapshot.docs.length < postsPerLoad) {
        dispatch(setHasMorePosts(false));
      }
    }

    if (category) {
      postsSnapshotWithCategories.docs.forEach((doc) => {
        responsePosts.push({...doc.data(), id: doc.id});
      });
    } else {
      postsSnapshot.docs.forEach((doc) => {
        responsePosts.push({...doc.data(), id: doc.id});
      });
    }

    dispatch(setPosts([...posts, ...responsePosts]));
  };

  return {
    createPost,
    createCategory,
    getAllCategories,
    getPosts,
    // getAllPosts,
    // getPostsByCategory,
    getOnePost,
    updatePost,
  };
};

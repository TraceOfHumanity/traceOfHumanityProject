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
import {setLastPost, setPosts} from "../redux/slices/library";
import {useAppDispatch} from "./useReduxToolkit";

interface IFirebase {
  newPost: (
    title: string,
    description: string,
    imageUrl: string | null,
    createdAt: Date,
    category?: string,
  ) => Promise<void>;

  newCategory: (name: string) => Promise<void>;

  getAllCategories: () => Promise<void>;

  getAllPosts: (postsPerLoad: number, startAfterPost?: any) => Promise<void>;
}

export const useFirebase = () => {
  const dispatch = useAppDispatch();

  const postsCollectionRef = collection(db, "posts");
  const categoriesCollectionRef = collection(db, "categories");

  const createPost: IFirebase["newPost"] = async (
    title,
    description,
    imageUrl,
    createdAt,
    category,
  ) => {
    await addDoc(postsCollectionRef, {
      title,
      description,
      imageUrl,
      createdAt,
      category,
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

  const getAllPosts: IFirebase["getAllPosts"] = async (
    postsPerLoad,
    startAfterPost,
  ) => {
    const posts: any[] = [];

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

    // const postsSnapshot = await getDocs(firstPostsQuery);
    const postsSnapshot = startAfterPost
      ? await getDocs(postsQuery)
      : await getDocs(firstPostsQuery);
    dispatch(setLastPost(postsSnapshot.docs[postsSnapshot.docs.length - 1]));
    postsSnapshot.docs.forEach((doc) => {
      posts.push({...doc.data(), id: doc.id});
    });

    dispatch(setPosts(posts));
    // dispatch(setPosts(postsSnapshot.docs.map((doc) => doc.data())));
  };

  return {createPost, createCategory, getAllCategories, getAllPosts};
};

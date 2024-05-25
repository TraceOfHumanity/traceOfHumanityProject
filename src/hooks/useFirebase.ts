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
import {useAppDispatch} from "./useReduxToolkit";

interface IFirebase {
  newArticle: (
    title: string,
    description: string,
    imageUrl: string | null,
    createdAt: Date,
    category?: string,
  ) => Promise<void>;

  newCategory: (name: string) => Promise<void>;
}

export const useFirebase = () => {
  const dispatch = useAppDispatch();

  const articleCollectionRef = collection(db, "articles");
  const categoriesCollectionRef = collection(db, "categories");

  const createPost: IFirebase["newArticle"] = async (
    title,
    description,
    imageUrl,
    createdAt,
    category,
  ) => {
    await addDoc(articleCollectionRef, {
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

  return {createPost, createCategory, getAllCategories};
};

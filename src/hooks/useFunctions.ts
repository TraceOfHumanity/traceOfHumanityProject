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

interface IFirebase {
  newArticle: (
    title: string,
    description: string,
    imageUrl: string | null,
    createdAt: Date,
  ) => Promise<void>;
}

export const useFirebase = () => {
  const articleCollectionRef = collection(db, "articles");
  const categoriesCollectionRef = collection(db, 'categories');

  const createPost: IFirebase["newArticle"] = async (
    title,
    description,
    imageUrl,
    createdAt,
  ) => {
    await addDoc(articleCollectionRef, {
      title,
      description,
      imageUrl,
      createdAt,
    });
  };

  const getAllPosts = async () => {};

  return {createPost, getAllPosts};
};

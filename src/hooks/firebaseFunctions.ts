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
    imageUrl: string,
  ) => Promise<void>;
}

export const useFirebase = () => {
  const articleCollectionRef = collection(db, "articles");

  const addArticle: IFirebase["newArticle"] = async (
    title,
    description,
    imageUrl,
  ) => {
    await addDoc(articleCollectionRef, {
      title,
      description,
      imageUrl,
    });
  };

  return {addArticle};
};

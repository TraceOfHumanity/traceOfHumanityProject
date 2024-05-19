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
  newArticle: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

export const useFirebase = () => {
  const articleCollectionRef = collection(db, "Images");

  const addArticle: IFirebase["newArticle"] = (newArticle) => {
    return addDoc(articleCollectionRef, newArticle);
  }  ;  
};

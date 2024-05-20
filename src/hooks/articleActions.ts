import React from "react";

import {storage} from "firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import {setImageUrl} from "../redux/slices/createPost";
import {setIsLoading} from "../redux/slices/loader";
import {useAppDispatch} from "./useReduxToolkit";

export const useArticleActions = () => {
  const dispatch = useAppDispatch();

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    console.log(e.target.files);
    dispatch(setIsLoading(true));
    const image = e.target.files?.[0];

    if (image) {
      const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          dispatch(setIsLoading(false));
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            dispatch(setIsLoading(false));
            dispatch(setImageUrl(downloadURL));
          });
        },
      );
    }
  };

  const deleteImage = async (imageUrl: string) => {
    dispatch(setIsLoading(true));
    const imageRef = ref(storage, imageUrl);
    deleteObject(imageRef).then(() => {
      dispatch(setIsLoading(false));
      dispatch(setImageUrl(""));
    });
  };

  return {addImage, deleteImage};
};

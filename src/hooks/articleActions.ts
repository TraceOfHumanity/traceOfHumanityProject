import React from "react";

import {storage} from "firebase.config";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

export const articleActions = () => {
  const addImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    e.preventDefault();
    const image = e.target.files?.[0];

    if (!image) {
      return;
    }

    const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      () => {
      // (snapshot) => {
        // const progress =
          // (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setPercentage(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      },
    );
  };

  return {addImage};
};

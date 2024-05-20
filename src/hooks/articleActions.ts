import React from "react";

import {storage} from "firebase.config";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

import {setImageUrl} from "../redux/slices/createPost";
import {setIsLoading} from "../redux/slices/loader";

export const articleActions = () => {

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.files);
    setIsLoading(true);
    const image = e.target.files?.[0];

    if (image) {
      const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setIsLoading(false);
            setImageUrl(downloadURL);
          });
        },
      );
    }
  };

  return {addImage};
};

import React, {useEffect, useState} from "react";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  views: number;
}

export const OnePost = () => {
  const {getOnePost} = useFirebase();
  const {getPath} = useAppNavigation();
  const [post, setPost] = useState({} as Post);

  console.log("post", post);

  useEffect(() => {
    const {pathArray} = getPath();
    const postId = pathArray[pathArray.length - 1];

    getOnePost(postId)
      .then((post) => {
        setPost(post);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div>Post</div>;
};

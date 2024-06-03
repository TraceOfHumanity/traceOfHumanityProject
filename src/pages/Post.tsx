import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";

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
  const {getOnePost, updatePost} = useFirebase();
  const {getPath} = useAppNavigation();
  const [post, setPost] = useState({} as Post);


  useEffect(() => {
    const {pathArray} = getPath();
    const postId = pathArray[pathArray.length - 1];

    getOnePost(postId)
      .then((post) => {
        setPost(post);
        updatePost(postId, {views: post.views + 1});
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full">
      <img
        className="float-left max-h-96 w-full object-cover md:w-1/2"
        src={post.imageUrl}
        alt={post.title}
      />
      <h1>{post.title}</h1>
      <Markdown>{post.description}</Markdown>
      <div className="">
        {/* <p>{post.likes}</p> */}
        <p>{post.views}</p>
      </div>
    </div>
  );
};

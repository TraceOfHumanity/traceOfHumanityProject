import React, {useEffect, useState} from "react";
import {FaEye} from "react-icons/fa";
import Markdown from "react-markdown";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";
import {cn} from "utils/cn";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  views: number;
  categories: string[];
}

export const OnePost = () => {
  const {getOnePost, updatePost} = useFirebase();
  const {getPath} = useAppNavigation();
  const [post, setPost] = useState({} as Post);

  useEffect(() => {
    const {pathArray} = getPath();
    const postId = pathArray[pathArray.length - 1];

    if (pathArray.includes("dashboard")) {
      getOnePost(postId, true)
        .then((post) => {
          setPost(post);
          // updatePost(postId, {views: post.views + 1});
        })
        .catch((error) => console.error(error));
    } else {
      getOnePost(postId)
        .then((post) => {
          setPost(post);
          updatePost(postId, {views: post.views + 1});
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div className="grid w-full gap-2 overflow-y-auto border-b border-opacityBlue pb-2  last:border-none sm:grid-cols-2">
      <h2 className="col-span-2">{post.title}</h2>
      <div className="flex items-start justify-center">
        <img
          className={cn(
            "float-left h-auto w-full",
            post.imageUrl ? "object-contain" : "object-contain p-3",
          )}
          src={post.imageUrl || "/logo.svg"}
          alt={post.title}
        />
      </div>
      <div className="flex flex-col">
        <Markdown>{post.description}</Markdown>
        <div className="mt-auto flex items-start justify-between gap-7">
          <span className="flex items-center gap-1">
            <FaEye />
            {post.views}
          </span>
          <span className="flex flex-wrap">
            Categories:
            {post.categories &&
              post.categories.map((category) => (
                <span key={category} className="ml-2">
                  {category}
                </span>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

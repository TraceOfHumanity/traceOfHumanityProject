import React, {useEffect, useState} from "react";
import {FaEye} from "react-icons/fa";
import Markdown from "react-markdown";

import {PostActions} from "components/PostActions";
import {StarsAnimation} from "components/StarsAnimation";
import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";
import {useAppSelector} from "hooks/useReduxToolkit";
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
  const {userId} = useAppSelector((state) => state.auth);

  useEffect(() => {
    const {pathArray} = getPath();
    const postId = pathArray[pathArray.length - 1];

    if (pathArray.includes("dashboard")) {
      getOnePost(postId, true)
        .then((post) => {
          setPost(post);
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
    <div className="relative group flex w-full flex-col gap-2 overflow-y-auto pb-2 last:border-none sm:grid-cols-2">
      <header className="relative">
        {userId === process.env.REACT_APP_TRACE_OF_HUMANITY && <PostActions />}
        <h2 className="col-span-2">{post.title}</h2>
      </header>
      <div className="flex grid-cols-1 flex-col gap-2 rounded-xl sm:grid sm:grid-cols-3 md:p-2">
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
        <div className="flex flex-col rounded-xl border border-b border-borderColor p-1 backdrop-blur-[6px] sm:col-start-2 sm:col-end-4">
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
      <StarsAnimation />
    </div>
  );
};

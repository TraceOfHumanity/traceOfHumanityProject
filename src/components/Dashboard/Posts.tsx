import React from "react";
import {FaEye} from "react-icons/fa";
import Markdown from "react-markdown";

import {PostItem} from "components/Library/PostItem";
import {useAppSelector} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  categories: string[];
}

export const Posts = () => {
  const {requestsToCreateArticles} = useAppSelector((state) => state.dashboard);

  return (
    <div className="relative flex flex-auto flex-col gap-5 overflow-y-auto">
      {requestsToCreateArticles.map((post: Post) => (
        // <PostItem
        //   key={post.id}
        //   id={post.id}
        //   title={post.title}
        //   description={post.description}
        //   imageUrl={post.imageUrl}
        //   views={post.views}
        //   categories={post.categories}
        // />
        <div className="grid w-full gap-2  border-b border-opacityBlue pb-2 last:border-none sm:grid-cols-2">
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
      ))}
    </div>
  );
};

import React from "react";

import {useAppSelector} from "hooks/useReduxToolkit";

import {PostItem} from "./PostItem";

interface Post {
  title: string;
  description: string;
  imageUrl: string;
}

export const Posts = () => {
  const {posts} = useAppSelector((state) => state.library);
  return (
    <div className="grid gap-5">
      {posts.map((post: Post) => (
        <PostItem
          key={post.title}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

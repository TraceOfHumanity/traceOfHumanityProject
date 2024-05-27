import React from "react";

import {useAppSelector} from "hooks/useReduxToolkit";

interface Post {
  title: string;
  description: string;
  imageUrl: string;
}

export const Posts = () => {
  const {posts} = useAppSelector((state) => state.library);
  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.title}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <img src={post.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

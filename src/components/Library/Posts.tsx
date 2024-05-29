import React, {useEffect, useRef, useState} from "react";

import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {PostItem} from "./PostItem";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const Posts = () => {
  const dispatch = useAppDispatch();
  const {posts} = useAppSelector((state) => state.library);
  const postsWrapperRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {getAllPosts} = useFirebase();
  const {postsPerLoad, lastPost} = useAppSelector((state) => state.library);

  console.log("lastPost", lastPost);

  const handleScroll = (e: Event) => {
    const target = e.currentTarget as HTMLDivElement;
    const {scrollTop, clientHeight, scrollHeight} = target;

    if (
      scrollHeight - scrollTop <= clientHeight + 5 ||
      scrollHeight === clientHeight
    ) {
      setIsLoading(true);

      getAllPosts(postsPerLoad, lastPost)
        .then(() => console.log("Posts are loaded successfully"))
        .catch((error) => console.error(error));
      // if (activeCategoryID === null) {
      //   dispatch(getMoreImagesInGallery());
      // } else {
      //   dispatch(getMoreImagesByCategory(activeCategoryName));
      // }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (postsWrapperRef.current) {
      postsWrapperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (postsWrapperRef.current) {
        postsWrapperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [
    lastPost,
  ]);

  return (
    <div
      className="flex flex-auto flex-col gap-5 overflow-y-auto"
      ref={postsWrapperRef}
    >
      {posts.map((post: Post) => (
        <PostItem
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

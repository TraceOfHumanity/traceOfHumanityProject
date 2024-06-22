import React, {useEffect, useRef} from "react";

import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {SimpleLoader} from "ui-elements/SimpleLoader";

import {setIsLoading} from "../../redux/slices/loader";
import {PostItem} from "./PostItem";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  // likes: number;
  views: number;
  categories: string[];
}

export const Posts = () => {
  const dispatch = useAppDispatch();
  const {posts} = useAppSelector((state) => state.library);
  const {isLoading} = useAppSelector((state) => state.loader);
  const postsWrapperRef = useRef<HTMLDivElement>(null);
  const {getPosts} = useFirebase();
  const {hasMorePosts, lastPost, selectedCategory} = useAppSelector(
    (state) => state.library,
  );

  const handleScroll = (e: Event) => {
    const target = e.currentTarget as HTMLDivElement;
    const {scrollTop, clientHeight, scrollHeight} = target;

    if (
      scrollHeight - scrollTop <= clientHeight + 5 ||
      scrollHeight === clientHeight
    ) {
      if (hasMorePosts) {
        getPosts(selectedCategory, lastPost)
          .then(() => {
            dispatch(setIsLoading(false));
            console.log("Posts are loaded successfully");
          })
          .catch((error) => console.error(error));
      }
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
  }, [lastPost]);

  return (
    <div
      className="flex flex-auto flex-col gap-5 overflow-y-auto relative"
      ref={postsWrapperRef}
    >
      {posts.map((post: Post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          // likes={post.likes}
          views={post.views}
          categories={post.categories}
        />
      ))}
      {isLoading && <SimpleLoader
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />}
    </div>
  );
};

import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {LibraryMenu} from "components/Library/Menu";
import {Posts} from "components/Library/Posts";
import {TopPanel} from "components/Library/TopPanel";
import {PageWrapper} from "components/PageWrapper";
import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {setIsLoading} from "../redux/slices/loader";

export const Library = () => {
  const dispatch = useAppDispatch();
  const {lastPost, selectedCategory} = useAppSelector((state) => state.library);
  const {getAllCategories, getAllPosts, getPostsByCategory} = useFirebase();

  useEffect(() => {
    getAllCategories()
      .then(() => console.log("Categories are loaded successfully"))
      .catch((error) => console.error(error));

    getAllPosts(lastPost)
      .then(() => {
        dispatch(setIsLoading(false));
        console.log("Posts are loaded successfully");
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getPostsByCategory(selectedCategory, lastPost)
        .then(() => {
          dispatch(setIsLoading(false));
          console.log("Posts are loaded successfully");
        })
        .catch((error) => console.error(error));
    }
  }, [selectedCategory]);

  return (
    <PageWrapper className="relative">
      <TopPanel />
      <div className="flex flex-auto gap-2 overflow-hidden">
        <LibraryMenu />
        <Outlet />
      </div>
    </PageWrapper>
  );
};

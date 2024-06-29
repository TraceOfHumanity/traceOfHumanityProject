import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {LibraryMenu} from "components/Library/Menu";
import {TopPanel} from "components/Library/TopPanel";
import {PageWrapper} from "components/PageWrapper";
import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {setIsLoading} from "../redux/slices/loader";
import { StarsAnimation } from "components/StarsAnimation";

export const Library = () => {
  const dispatch = useAppDispatch();
  const {lastPost, selectedCategory} = useAppSelector((state) => state.library);
  const {getAllCategories, getPosts} = useFirebase();

  useEffect(() => {
    getAllCategories()
      .then(() => console.log("Categories are loaded successfully"))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getPosts(selectedCategory, lastPost)
      .then(() => {
        dispatch(setIsLoading(false));
        console.log("Posts are loaded successfully");
      })
      .catch((error) => console.error(error));
  }, [selectedCategory]);

  return (
    <PageWrapper className="relative overflow-hidden">
        <StarsAnimation />
      <TopPanel />
      <div className="flex flex-auto gap-2 overflow-hidden">
        <LibraryMenu />
        <Outlet />
      </div>
    </PageWrapper>
  );
};

import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {LibraryMenu} from "components/Library/Menu";
import {Posts} from "components/Library/Posts";
import {TopPanel} from "components/Library/TopPanel";
import {PageWrapper} from "components/PageWrapper";
import {useFirebase} from "hooks/useFirebase";
import {useAppSelector} from "hooks/useReduxToolkit";

export const Library = () => {
  const {lastPost} = useAppSelector((state) => state.library);

  const {getAllCategories, getAllPosts} = useFirebase();

  useEffect(() => {
    getAllCategories()
      .then(() => console.log("Categories are loaded successfully"))
      .catch((error) => console.error(error));

      getAllPosts(lastPost)
        .then(() => console.log("Posts are loaded successfully"))
        .catch((error) => console.error(error));
  }, []);
  
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

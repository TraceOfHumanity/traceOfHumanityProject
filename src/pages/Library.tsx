import React from "react";
import {Outlet} from "react-router-dom";

import {LibraryMenu} from "components/Library/Menu";
import {Posts} from "components/Library/Posts";
import {TopPanel} from "components/Library/TopPanel";
import {PageWrapper} from "components/PageWrapper";

export const Library = () => {
  return (
    <PageWrapper className="relative">
      <TopPanel />
      <div className="flex gap-2 flex-auto overflow-hidden">
        <LibraryMenu />
        <Posts />
      </div>
    </PageWrapper>
  );
};

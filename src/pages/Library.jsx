import React from "react";

import { Outlet } from "react-router-dom";
import { LibraryMenu } from "components/Library/Menu";
import { TopPanel } from "components/Library/TopPanel";

import { PageWrapper } from "components/PageWrapper";

export const Library = () => {
  return (
    <PageWrapper >
      <TopPanel />
      <div>
        <LibraryMenu />
        <Outlet />
      </div>
    </PageWrapper>
  );
};

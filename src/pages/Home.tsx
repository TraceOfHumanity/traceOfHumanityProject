import React from "react";

import {Earth} from "components/3D/Earth";
import {MainMenu} from "components/MainMenu";
import {PageWrapper} from "components/PageWrapper";

export const Home = () => {
  return (
    <PageWrapper>
      <MainMenu />
      <Earth />
    </PageWrapper>
  );
};

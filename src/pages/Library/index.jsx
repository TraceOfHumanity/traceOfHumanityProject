import React from "react";

import { Outlet } from "react-router-dom";
import { LibraryMenu } from "components/Library/Menu";
import { TopPanel } from "components/Library/TopPanel";

import styles from "./lib.module.scss";

export const Library = () => {
  return (
    <div className={styles.wrapper}>
      <TopPanel />
      <div className={styles.library}>
        <LibraryMenu />
        <Outlet />
      </div>
    </div>
  );
};

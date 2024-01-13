import React from "react";

import { Outlet } from "react-router-dom";
import { LibraryMenu } from "src/components/Library/Menu";
import { TopPanel } from "src/components/Library/TopPanel";

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

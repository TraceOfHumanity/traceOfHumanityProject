import React from "react";

import { Outlet } from "react-router-dom";
import { LibraryMenu } from "src/components/LibraryMenu";

import styles from "./lib.module.scss";

export const Library = () => {
  return (
    <div className={styles.library}>
      <LibraryMenu />
      <Outlet />
    </div>
  );
};

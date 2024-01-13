import React from "react";

import styles from "./libraryMenu.module.scss";

export const LibraryMenu = () => {
  return (
    <div className={styles.libraryMenu}>
      <div className="">History</div>
      <div className="">Science</div>
      <div className="">Philosophy and Religion</div>
    </div>
  );
};

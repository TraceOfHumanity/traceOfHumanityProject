import React from "react";

import styles from "./libraryMenu.module.scss";

export const LibraryMenu = () => {
  return (
    <div className={styles.libraryMenu}>
      <div className="">History</div>
      <div className="">Science</div>
      <div className="">Philosophy and Religion</div>

      {/* {Array.from({ length: 60 }).map((_, i) => {
        return (
          <div className={styles.letter} key={i}>
            {String.fromCharCode(65 + i)}
          </div>
        );
      })} */}
    </div>
  );
};

import React from "react";
import styles from "./mainMenu.module.scss";
import { Player } from "./Player";
export const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      MainMenu
      <Player />
    </div>
  );
};

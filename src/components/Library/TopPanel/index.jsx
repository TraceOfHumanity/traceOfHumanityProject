import React from "react";

import { useSelector } from "react-redux";

import { Navigation } from "../Navigation";
import styles from "./topPanel.module.scss";

export const TopPanel = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.topPanel}>
      <Navigation />
    </div>
  );
};

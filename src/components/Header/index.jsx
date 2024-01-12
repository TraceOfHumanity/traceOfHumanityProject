import React from "react";

import { Link } from "react-router-dom";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftColumn}>
        <Link className={styles.brain} to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h2>Trace of Humanity</h2>
      </div>

      <div className={styles.centerColumn}></div>

      <div className={styles.rightColumn}>{/* <Auth /> */}</div>
    </div>
  );
};

// export default Header;

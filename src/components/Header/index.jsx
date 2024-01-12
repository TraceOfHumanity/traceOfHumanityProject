import React from "react";

import { Link } from "react-router-dom";

import { Auth } from "./Auth";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div></div>
      <Link className={styles.brain} to="/">
        <img src="/logo.svg" alt="" />
      </Link>
      {/* <img className={styles.nano} src="/assets/nano.svg" alt="" /> */}
      <Auth />
    </div>
  );
};

// export default Header;

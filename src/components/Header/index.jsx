import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.brain} to="/">
        <img src="/logo.svg" alt="" />
      </Link>
        <img className={styles.nano} src="/assets/nano.svg" alt="" />
    </div>
  );
};

// export default Header;

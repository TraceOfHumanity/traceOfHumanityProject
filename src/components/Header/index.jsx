import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>
    </div>
  );
};

// export default Header;

import React from "react";
import styles from "./Header.module.scss";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Do you really want to log out of your account?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}></div>
      <div className={styles.middle}>
        <Link to="/">
          <img src="/assets/brain.svg" alt="" />
        </Link>
      </div>
      <div className={styles.right}>
        {isAuth ? (
          <button onClick={onClickLogout}>
            <RxExit />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;

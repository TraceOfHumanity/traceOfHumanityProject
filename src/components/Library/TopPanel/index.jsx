import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { setIsOpenPleaseRegisterPopup } from "../../../redux/slices/popupsSlice";
import { Navigation } from "../Navigation";
import styles from "./topPanel.module.scss";

export const TopPanel = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log(useLocation());

  const showWarningPopup = () => {
    dispatch(setIsOpenPleaseRegisterPopup(true));
  };
  return (
    <div className={styles.topPanel}>
      <Navigation />
      {isLoggedIn ? (
        <Link to="/create-post">
          <MdOutlinePostAdd />
          Add post
        </Link>
      ) : (
        <button onClick={() => showWarningPopup()}>
          <MdOutlinePostAdd />
          Add post
        </button>
      )}
    </div>
  );
};

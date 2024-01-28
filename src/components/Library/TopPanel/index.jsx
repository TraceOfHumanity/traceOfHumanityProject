import React from "react";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setIsOpenPleaseRegisterPopup } from "src/redux/features/popupsSlice";

import { Navigation } from "../Navigation";
import styles from "./topPanel.module.scss";

export const TopPanel = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  console.log(useLocation());

  const showWarningPopup = () => {
    dispatch(setIsOpenPleaseRegisterPopup(true));
  };
  return (
    <div className={styles.topPanel}>
      <Navigation />
      {/* {user ? (
        <Link to="/create-post">
          <MdOutlinePostAdd />
          Add post
        </Link>
      ) : (
        <button onClick={() => showWarningPopup()}>
          <MdOutlinePostAdd />
          Add post
        </button>
      )} */}
    </div>
  );
};

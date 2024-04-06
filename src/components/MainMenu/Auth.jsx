import { auth } from "firebase.config";
import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { setIsShowLoginPopup } from "../../redux/features/popupsSlice";

// import styles from "./mainMenu.module.scss";

export const Auth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  // const login = async () => {
  //   dispatch(setIsShowLoginPopup(true));
  // };

  // const logoutUser = () => {
  //   signOut(auth)
  //     .then(() => {
  //       toast.success("Logout success");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  return (
    // <div className={styles.authorization}>
    <div className="">
      {!isLoggedIn ? (
        <button className="flex items-center" onClick={() => login()}>
          Login
        </button>
      ) : (
        // <div className={styles.user}>
        <div className="">
          <button className="flex items-center" onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

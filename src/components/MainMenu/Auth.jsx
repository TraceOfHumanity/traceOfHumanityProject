import React from "react";

import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "src/firebase.config";
import { setIsShowLoginPopup } from "src/redux/features/popupsSlice";

import styles from "./mainMenu.module.scss";

export const Auth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const login = async () => {
    dispatch(setIsShowLoginPopup(true));
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className={styles.authorization}>
      {!isLoggedIn ? (
        <button className="flex items-center" onClick={() => login()}>
          Login
        </button>
      ) : (
        <div className={styles.user}>
          <button className="flex items-center" onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

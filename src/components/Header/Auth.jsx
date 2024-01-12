import React, { useEffect } from "react";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { app } from "src/firebase.config";
import { setUser } from "src/redux/features/userSlice";

import styles from "./header.module.scss";

export const Auth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const login = async () => {
    if (!user) {
      const response = await signInWithPopup(firebaseAuth, provider);
      localStorage.setItem(
        "user",
        JSON.stringify(response.user.providerData[0])
      );
      dispatch(setUser(response.user.providerData[0]));
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={styles.authorization}>
      {/* <button onClick={() => login()}>login</button>
      <button>logout</button> */}
      {user ? (
        <div className={styles.user}>
          <img src={user.photoURL} alt="" />
          <button className="flex items-center" onClick={() => logout()}>
            logout
          </button>
        </div>
      ) : (
        <button className="flex items-center" onClick={() => login()}>
          login
        </button>
      )}
    </div>
  );
};

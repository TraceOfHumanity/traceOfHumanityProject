import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "firebase.config";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/features/authSlice";

import styles from "./header.module.scss";

export const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowGreeting(true);
      setTimeout(() => {
        setShowGreeting(false);
      }, 10000);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.split("@")[0];
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          console.log(uName);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);
  return (
    <div className={styles.header}>
      <div className={styles.leftColumn}>
        <Link className={styles.brain} to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h2>Trace of Humanity</h2>
      </div>

      <div className={styles.centerColumn}></div>

      <div className={styles.rightColumn}>
        {isLoggedIn && showGreeting && <p>Hi, {displayName} !</p>}
      </div>
    </div>
  );
};

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { FaSpaceShuttle } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
// import { Player } from "../MusicPlayer/Player";
import { Link } from "react-router-dom";
import { setFlashingOfTheLoginButton } from "src/redux/features/animationsSlice";

import { setIsOpenGreetingPopup } from "../../redux/features/popupsSlice";
import { Auth } from "./Auth";
import styles from "./mainMenu.module.scss";

const menuItems = [
  { name: "explore", link: "/library", icon: <FaSpaceShuttle /> },
  { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
  { name: "authorization", icon: <IoLogIn /> },
];

export const MainMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const authButtonRef = useRef();
  const { flashingOfTheLoginButton } = useSelector((state) => state.animations);

  useEffect(() => {
    const notFirstVisit = localStorage.getItem("notFirstVisit");
    if (!notFirstVisit) {
      localStorage.setItem("notFirstVisit", true);
      dispatch(setIsOpenGreetingPopup(true));
    }
  }, []);
  useEffect(() => {
    if (flashingOfTheLoginButton) {
      gsap.fromTo(
        authButtonRef.current,
        { scale: 1 },
        {
          delay: 1.5,
          scale: 1.01,
          duration: 1.5,
          repeat: 4,
          transformOrigin: "center ",
          ease: "elastic.out(10, 0.1)",
          onComplete: () => {
            dispatch(setFlashingOfTheLoginButton(false));
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.mainMenu}>
      <div className={styles.cut}>
        <div className={styles.menuItemsWrapper}>
          {menuItems.map((item, index) => (
            <div
              className={styles.menuItem}
              key={index}
              ref={item.name === "authorization" ? authButtonRef : null}
            >
              {item % 2 !== 0 ? item?.icon : null}
              {item.link && <Link to={item.link}>{item.name}</Link>}
              {item.name === "authorization" && <Auth />}
              {item % 2 === 0 ? item?.icon : null}
            </div>
          ))}
          {user && user.email === process.env.REACT_APP_TRACE_OF_HUMANITY && (
            <Link className={styles.menuItem} to="dashboard">
              {menuItems.length % 2 !== 0 && <MdDashboard />}
              dashboard
              {menuItems.length % 2 === 0 && <MdDashboard />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

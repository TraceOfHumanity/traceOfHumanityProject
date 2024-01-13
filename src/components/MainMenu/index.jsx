import React, { useEffect } from "react";

import { FaSpaceShuttle } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
// import { Player } from "../MusicPlayer/Player";
import { Link } from "react-router-dom";

import { setIsOpenGreetingPopup } from "../../redux/features/popupsSlice";
import { GreetingPopup } from "../Popups/GreetingPopup";
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
  console.log(user);
  const isShowGreetingPopup = useSelector(
    (state) => state.popups.isOpenGreetingPopup
  );
  useEffect(() => {
    const notFirstVisit = localStorage.getItem("notFirstVisit");
    if (!notFirstVisit) {
      localStorage.setItem("notFirstVisit", true);
      dispatch(setIsOpenGreetingPopup(true));
    }
  }, []);

  return (
    <div className={styles.mainMenu}>
      <div className={styles.cut}>
        <div className={styles.menuItemsWrapper}>
          {menuItems.map((item, index) => (
            <div className={styles.menuItem} key={index}>
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
      {isShowGreetingPopup && <GreetingPopup />}
    </div>
  );
};

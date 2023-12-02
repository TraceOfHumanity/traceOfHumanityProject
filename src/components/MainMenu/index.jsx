import React from "react";

import { FaSpaceShuttle } from "react-icons/fa";
import { SiAlienware } from "react-icons/si";
// import { Player } from "../MusicPlayer/Player";
import { Link } from "react-router-dom";

import styles from "./mainMenu.module.scss";

const menuItems = [
  { name: "explore", link: "/library", icon: <FaSpaceShuttle /> },
  { name: "Author", link: "/aboutAuthor", icon: <SiAlienware /> },
  // { name: "Contact", link: "/contact" },
  // { name: "Portfolio", link: "/portfolio" },
  // { name: "Blog", link: "/blog" },
  // { name: "Shop", link: "/shop" },
];

export const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.cut}>
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              {item % 2 !== 0 ? item.icon : null}
              {item.name}
              {item % 2 === 0 ? item.icon : null}
            </Link>
          ))}
        </div>
        {/* <Player /> */}
      </div>
    </div>
  );
};

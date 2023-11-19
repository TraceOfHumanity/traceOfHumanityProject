import React from "react";
import styles from "./mainMenu.module.scss";
import { Player } from "./Player";
import { Link } from "react-router-dom";
import { FaSpaceShuttle } from "react-icons/fa";

const menuItems = [
  { name: "explore", link: "/library" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Shop", link: "/shop" },
];

export const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.cut}>
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              // style={index % 2 === 0 ? { right: "100%" } : { left: "100%" }}
            >
              {item.name === "explore" && <FaSpaceShuttle />}
              {item.name}
            </Link>
          ))}
          <Player />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./MainMemu.module.scss";
import { Link } from "react-router-dom";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import PopupInfo from "../popupInfo/PopupInfo";
import Coordinates from "../coordinates/Coordinates";

const MainMemu = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);

  const htmlClass: string = showPopup ? "openPopup" : "closedPopup";

  return (
    <div className={styles.menuContainer}>
      <div className={styles.cut}>
        <div className={styles.menu}>
          <Link to="/library">
            <span>
              <FaSpaceShuttle />
            </span>
            <h5>Start</h5>
          </Link>
          <Link to="/">
            <img src="/assets/brain.svg" alt="" />
            <h5></h5>
          </Link>
          <button onClick={() => setShowPopup(!showPopup)}>
            <span>
              <BsInfoCircle />
            </span>
            <h5>Info</h5>
          </button>
          <Link to="/">
            <img src="/assets/brain.svg" alt="" />
            <h5></h5>
          </Link>
          <Link to="/author">
            <span>
              <GiAstronautHelmet />
            </span>
            <h5>Author</h5>
          </Link>
          <Link to="/management">
            <span>
              <BsLock />
            </span>
            <h5>Admin</h5>
          </Link>
          {/* <Coordinates /> */}
        </div>
      </div>
      <PopupInfo setShowPopup={setShowPopup} htmlClass={htmlClass} />
    </div>
  );
};

export default MainMemu;

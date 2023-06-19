import React from "react";
import styles from "../../pages/Greeting/Greeting.module.scss";

import { IoMdClose } from "react-icons/io";

interface PopupGreetingProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  htmlClass: string
}

const PopupInfo: React.FC<PopupGreetingProps> = ({ setShowPopup, htmlClass }) => {
  
  const closePopup = () => {
    setShowPopup(false);
  };



  return (
    <div className={`${styles.popup} ${htmlClass}`}>
      <h3>Information for users</h3>
      <p>
        On this site you will find a lot of interesting information related to
        various areas of human life. If you would like to add or edit any
        information, please write in one of the following ways:
      </p>
      <div onClick={closePopup} className={styles.close}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default PopupInfo;

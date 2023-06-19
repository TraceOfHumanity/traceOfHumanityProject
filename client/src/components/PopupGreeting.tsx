import React from "react";
import styles from "../pages/Greeting/Greeting.module.scss";
import { IoMdClose } from "react-icons/io";

interface PopupGreetingProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupGreeting: React.FC<PopupGreetingProps> = ({setShowPopup}) => {

const closePopup = () => {
  setShowPopup(false)
}

  return (
    <div className={`${styles.popup} ${styles.htmlClass}`}>
      <h3>Welcome</h3>
      <p>
        Welcome to this site! Here you will be able to learn about the most
        important events that influenced the formation of modern civilization,
        as well as what the future scenarios of human development might be. We
        hope that you will like it and that you will find a lot of interesting
        and useful material for yourself. Enjoy!
      </p>
      <div onClick={closePopup} className={styles.close}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default PopupGreeting;

import React, { useEffect, useState } from "react";
import EarthScene from "../../components/earthScene/EarthScene";
import styles from "./Greeting.module.scss";
import MainMemu from "../../components/mainMenu/MainMemu";
import PopupGreeting from "../../components/PopupGreeting";

import { motion } from "framer-motion";

const Greeting: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem("popupShown");
    if (!isPopupShown) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  return (
    <motion.div
      className={styles.greeting}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainMemu />
      <EarthScene />
      <div className={styles.lines}></div>
      {showPopup && <PopupGreeting setShowPopup={setShowPopup} />}
    </motion.div>
  );
};

export default Greeting;

import React from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const navigation = useNavigate();

  const goBack = () => navigation(-1);

  return (
    <div className={styles.navigation}>
      <button onClick={() => goBack()}>
        <IoIosArrowRoundBack />
        Go Back
      </button>
    </div>
  );
};

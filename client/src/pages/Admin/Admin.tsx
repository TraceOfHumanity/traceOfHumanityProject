import React from "react";
import styles from "./Admin.module.scss";
import Authorization from "../Authorization/Authorization";
import Registration from "../Registration/Registration";

import { motion } from "framer-motion";

const Management = () => {
  const [page, setPage] = React.useState("login");
  console.log(page);

  const onLogin = () => {
    setPage("login");
  };

  const onRegistration = () => {
    setPage("registration");
  };

  const renderContent = () => {
    if (page === "login") {
      return <div>{<Authorization />}</div>;
    } else if (page === "registration") {
      return <div>{<Registration />}</div>;
    }
  };

  return (
    <motion.div
      className={styles.management}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.authorization}>
        <button
          className={`${styles.login} ${styles.button}`}
          onClick={onLogin}
        >
          Log in
        </button>
        <button
          className={`${styles.registration} ${styles.button}`}
          onClick={onRegistration}
        >
          Registration
        </button>
      </div>
      {renderContent()}
    </motion.div>
  );
};

export default Management;

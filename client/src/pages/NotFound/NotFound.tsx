import React from "react";
import styles from "./NotFound.module.scss";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className={styles.notFound}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      NotFound
    </motion.div>
  );
};

export default NotFound;

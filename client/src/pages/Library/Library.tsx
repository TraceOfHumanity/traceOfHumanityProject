import React from "react";
import styles from "./Library.module.scss";

import { motion } from "framer-motion";

const Library = () => {
  return (
    <motion.div
      className={styles.library}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Library
    </motion.div>
  );
};

export default Library;

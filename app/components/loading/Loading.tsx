import React from "react";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default loading;

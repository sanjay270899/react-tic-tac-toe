import React from "react";
import styles from "../styles/Welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles["welcome"]}>
      <div className={styles["players"]}>
        <input type="text" placeholder="Player 1" />
        <div className={styles["vs"]}>VS</div>
        <input type="text" placeholder="Player 2" />
      </div>
      <button>Start</button>
    </div>
  );
};

import React from "react";
import { Board } from "../components/Board";
import styles from "../styles/Game.module.scss";

export const Game = ({ player1, player2 }) => {
  return (
    <div>
      <h1 className={styles["title"]}>
        <span className={styles["name"]}>{player1}</span>
        &nbsp;&nbsp;VS&nbsp;&nbsp;
        <span className={styles["name"]}>{player2}</span>
      </h1>
      <Board player1={player1} player2={player2} />
    </div>
  );
};

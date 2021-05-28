import React, { useState } from "react";
import { Toast } from "@innovaccer/design-system";
import styles from "../styles/Welcome.module.scss";

export const Welcome = ({
  setPage,
  player1,
  player2,
  setPlayer1,
  setPlayer2
}) => {
  const [alert, setAlert] = useState({
    state: false,
    message: ""
  });

  const createAlert = msg => {
    setAlert({ state: true, message: msg });
  };

  // Function on start button click
  const handleClick = () => {
    if (player1 === "") {
      createAlert("Player 1 field is Empty!");
      return;
    }
    if (player2 === "") {
      createAlert("Player 2 field is Empty!");
      return;
    }
    handleAlertClose();
    setPage(1);
  };

  const handleAlertClose = () => {
    setAlert({ state: false, message: "" });
  };

  return (
    <div className={styles["welcome"]}>
      <div className={styles["players"]}>
        <input
          type="text"
          placeholder="Player 1"
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
        />
        <div className={styles["vs"]}>VS</div>
        <input
          type="text"
          placeholder="Player 2"
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
        />
      </div>
      <button onClick={() => handleClick()}>Start</button>
      {alert.state && (
        <Toast
          appearance="alert"
          title={alert.message}
          className="alert"
          onClose={() => handleAlertClose()}
        />
      )}
    </div>
  );
};

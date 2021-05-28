import React, { useState } from "react";
import styles from "../styles/Cell.module.scss";
import x from "../icons/x.png";
import o from "../icons/o.png";

export const Cell = ({ row, col, state, setState, turn, setTurn, disable }) => {
  const handleClick = () => {
    if (state[row * 3 + col] === "unchecked" && !disable) {
      const array = state;
      array[row * 3 + col] = turn === "p1" ? "o" : "x";
      setState(array);
      setTurn(current => (current === "p1" ? "p2" : "p1"));
    }
  };
  return (
    <div className={styles["cell"]} onClick={() => handleClick()}>
      {state[row * 3 + col] === "unchecked" ? (
        ""
      ) : (
        <img src={state[row * 3 + col] === "x" ? x : o} alt="X" />
      )}
    </div>
  );
};

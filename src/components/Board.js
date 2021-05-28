import React, { useEffect, useState } from "react";
import styles from "../styles/Board.module.scss";
import { Cell } from "./Cell";

export const Board = ({ player1, player2 }) => {
  const PLAYER_1_TURN_MESSAGE = `${player1} Turns`;
  const PLAYER_2_TURN_MESSAGE = `${player2} Turns`;
  const PLAYER_1_WON_MESSAGE = `${player1} Won!`;
  const PLAYER_2_WON_MESSAGE = `${player2} Won!`;
  const INITIAL_ARRAY = [
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked",
    "unchecked"
  ];

  const [state, setState] = useState(INITIAL_ARRAY);
  const [turn, setTurn] = useState("p1"); // Initial turn of Player 1
  const [message, setMessage] = useState(PLAYER_1_TURN_MESSAGE);
  const [isEnd, setIsEnd] = useState(false);

  // Function to Reset and Restart the Game
  const resetGame = () => {
    setState(INITIAL_ARRAY);
    setTurn("p1");
    setIsEnd(false);
  };

  // Function to Ends the Game and display Won Message
  const handlePlayerWon = who => {
    setMessage(who === 0 ? PLAYER_1_WON_MESSAGE : PLAYER_2_WON_MESSAGE);
    setIsEnd(true);
  };

  // Checking if someone won or game ends
  useEffect(() => {
    let isEnd = true;
    for (let i = 0; i < 3; i = i + 1) {
      let row = "";
      let col = "";
      for (let j = 0; j < 3; j = j + 1) {
        row += state[i * 3 + j];
        col += state[j * 3 + i];

        if (state[i * 3 + j] === "unchecked") {
          isEnd = false;
        }
      }

      if (row === "ooo" || col === "ooo") {
        handlePlayerWon(0);
        return;
      } else if (row === "xxx" || col === "xxx") {
        handlePlayerWon(1);
        return;
      }
    }

    // diagonals
    let primary_d = state[0] + state[4] + state[8];
    let secondary_d = state[2] + state[4] + state[6];

    if (primary_d === "ooo" || secondary_d === "ooo") {
      handlePlayerWon(0);
      return;
    } else if (primary_d === "xxx" || secondary_d === "xxx") {
      handlePlayerWon(1);
      return;
    }

    // TIE Case
    if (isEnd) {
      setMessage("Tie!");
      setIsEnd(true);
      return;
    }

    setMessage(turn === "p1" ? PLAYER_1_TURN_MESSAGE : PLAYER_2_TURN_MESSAGE);
  }, [turn]);

  return (
    <section className={styles["container"]}>
      <h2 className={styles["message"]}>{message}</h2>
      <div className={styles["board"]}>
        <Cell
          row={0}
          col={0}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={0}
          col={1}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={0}
          col={2}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={1}
          col={0}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={1}
          col={1}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={1}
          col={2}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={2}
          col={0}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={2}
          col={1}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
        <Cell
          row={2}
          col={2}
          state={state}
          setState={setState}
          turn={turn}
          setTurn={setTurn}
          disable={isEnd}
        />
      </div>
      {isEnd && <button onClick={() => resetGame()}>Restart</button>}
    </section>
  );
};

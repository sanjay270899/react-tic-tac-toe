import { useState } from "react";
import { Header } from "./components/Header";
import { Game } from "./pages/Game";
import { Welcome } from "./pages/Welcome";

function App() {
  const [page, setPage] = useState(0);
  const [player1, setPlayer1] = useState(""); // Player 1 Name
  const [player2, setPlayer2] = useState(""); // Player 2 Name

  return (
    <div className="App">
      <Header />
      {page === 0 ? (
        <Welcome
          setPage={setPage}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      ) : (
        <Game player1={player1} player2={player2} />
      )}
    </div>
  );
}

export default App;

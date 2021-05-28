import { useState } from "react";
import { Header } from "./components/Header";
import { Welcome } from "./pages/Welcome";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <Header />
      {page === 0 ? <Welcome setPage={setPage} /> : ""}
    </div>
  );
}

export default App;

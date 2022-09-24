import { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [gameState, setGameState] = useState(false);
  const startGame = () => {
    setGameState(!gameState);
    console.log("game started");
  };

  return <GameBoard start={gameState} startGame={startGame} />;
};

export default App;

import { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [gameState, setGameState] = useState(false);
  console.log(gameState);
  const startGame = () => {
    setGameState(!gameState);
    console.log(gameState);
  };

  return <GameBoard start={gameState} startGame={startGame} />;
};

export default App;

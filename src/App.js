import { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [gameStart, setGameStart] = useState(false);

  return <GameBoard start={gameStart} />;
};

export default App;

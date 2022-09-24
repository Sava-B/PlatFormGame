import React from "react";

const StartButton = ({ start, startGame }) => {
  return (
    <div onClick={startGame} className="startButton">
      {!start ? "Start Game" : "Reset Game"}
    </div>
  );
};

export default StartButton;

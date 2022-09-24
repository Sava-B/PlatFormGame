import React from "react";
import { FaDog } from "react-icons/fa";
import { IoAmericanFootballSharp } from "react-icons/io5";
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="container">
      <div className="dog">
        <FaDog size={60} />
      </div>
        
      <div className="obstacle">
        <IoAmericanFootballSharp size={60} />
      </div>
    </div>
  );
};

export default GameBoard;

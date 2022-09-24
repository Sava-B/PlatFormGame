import React from "react";
import { FaDog } from "react-icons/fa";
import { IoAmericanFootballSharp } from "react-icons/io5";
import Score from "./Score"
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="container">
      <Score/>
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

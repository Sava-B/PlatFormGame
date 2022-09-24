import React, { useState } from "react";
import { FaDog } from "react-icons/fa";
import { IoAmericanFootballSharp } from "react-icons/io5";
import Score from "./Score";
import "./GameBoard.css";


  const dogJump = () => {
  const dog = document.querySelector(".dog");
  if (!dog.classList.contains("jump")) {
    dog.classList.add("jump");
  }
  setTimeout(() => dog.classList.remove("jump"), 2000);
};

const GameBoard = () => {
  return (
    <div className="container">
      <div onClick={dogJump} className="dog">
        <FaDog size={60} />
      </div>
      <Score />

      <div className="obstacle">
        <IoAmericanFootballSharp size={60} />
      </div>
    </div>
  );
};

export default GameBoard;

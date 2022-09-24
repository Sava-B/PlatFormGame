import React, { useState } from "react";
import { FaDog } from "react-icons/fa";
import { IoAmericanFootballSharp } from "react-icons/io5";
import Score from "./Score";
import StartButton from "./StartButton";
import "./GameBoard.css";

const dogJump = () => {
  const dog = document.querySelector(".dog");
  if (!dog.classList.contains("jump")) {
    dog.classList.add("jump");
  }
  setTimeout(() => dog.classList.remove("jump"), 1500);
};

const GameBoard = ({ start, startGame }) => {
  return (
    <div className="container">
      <div onClick={dogJump} className="dog">
        <FaDog size={60} />
      </div>
      <Score start={start} />
      <StartButton start={start} startGame={startGame} />

      <div className="obstacle">
        <IoAmericanFootballSharp size={60} />
      </div>

      <div className="floor top">

      </div>
      <div className="floor top"></div>
    </div>

  );
};

export default GameBoard;

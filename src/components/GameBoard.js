import React, { useState } from "react";
import { FaDog } from "react-icons/fa";
import { IoAmericanFootballSharp } from "react-icons/io5";
import Score from "./Score"
import "./GameBoard.css";

const dogJump = () => {
  console.log('clicked')
  const dog = document.querySelector('.dog')
  if(!dog.classList.contains('jump')) {
    (dog.classList.add('jump'))
  }
  setTimeout(() => dog.classList.remove('jump'), 2000)
}
  

const GameBoard = () => {
  return (
    <div className="container">

      <div onClick={dogJump} className="dog">

      <Score/>
      <div className="dog">

        <FaDog size={60} />
      </div>
        
      <div className="obstacle">
        <IoAmericanFootballSharp size={60} />
      </div>

      <div className="floor top">
      </div>
    </div>
  );
};

export default GameBoard;

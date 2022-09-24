import React, { useState, useEffect } from "react";
import "./Score.css";

const Score = ({ start }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!start) {
      setScore(0);
    }
  }, [start]);

  useEffect(() => {
    if (!start) {
      clearInterval();
      return;
    }
    setInterval(() => {
      setScore((prevScore) => prevScore + 1);
    }, 400);
  }, [start]);
  // setInterval(setScore(score + 1), 1000)

  return <div className="score">Score: {score}</div>;
};

export default Score;

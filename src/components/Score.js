import React, {useState, useEffect} from "react"
import './Score.css'

const Score = () => {

    const [score, setScore] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setScore(prevScore => prevScore + 0.5);
            
        }, 500)
    }, [])
    // setInterval(setScore(score + 1), 1000)
    

    return <div className="score">Score: {score}</div>
}

export default Score;
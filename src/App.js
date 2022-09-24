import React from 'react'
<<<<<<< HEAD
import { FaDog } from 'react-icons/fa'
import { IoAmericanFootballSharp } from 'react-icons/io5'
import Score from './components/Score'



const App = () => {
  return (
    <div className='container'>
      <Score/>
      <FaDog size={60}/>
      <div className='floor'>

      </div>
      <div className='obstacle'>
        <IoAmericanFootballSharp />
      </div>
    </div>
=======
import GameBoard from './components/GameBoard'

const App = () => {
  return (
    <GameBoard />
>>>>>>> main
  )
}

export default App
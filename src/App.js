import React from 'react'
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
  )
}

export default App
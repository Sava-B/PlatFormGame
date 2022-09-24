import React from 'react'
import { FaDog } from 'react-icons/fa'
import { IoAmericanFootballSharp } from 'react-icons/io5'



const App = () => {
  return (
    <div className='container'>
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
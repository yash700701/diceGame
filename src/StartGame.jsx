import React from 'react'
import dices from "./images/dices.png"



function StartGame({toggle}) {
  return (
    <div className='flex flex-col items-center bg-slate-200 h-screen w-full'> 
      <div> <img className='h-72 p-10 align-bottom' src={dices} alt="dices" /></div>
      <h1 className='text-5xl font-bold'>DICE GAME</h1>
      <button onClick={toggle} className='text-white border-2 rounded-md px-6 py-1 mr-40 bg-black font-bold'>start - </button>
      <p className='text-teal-900 my-52 text-xs opacity-50'>made with love by yash :</p>
    </div>
  )
}

export default StartGame
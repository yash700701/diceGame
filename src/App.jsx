import { useState } from 'react'
import './App.css'
import  StartGame from './StartGame.jsx'
import  Play from './Play'


function App() {
  
  let [gameStart, setGameStart] = useState(false)
  const toggleGamePlay = ()=>{
    setGameStart((prev)=>!prev)
  }
  return (
  <>
  {gameStart ? < Play/> : < StartGame toggle={toggleGamePlay}/>}
  </> 
  )
}


export default App

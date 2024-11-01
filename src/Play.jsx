import React, { useEffect } from 'react'
import {useState} from 'react'
import Rules from './rules'



function Play() {
  // score
  const [score,setScore] = useState(2)
  {/* num selector */}
  const [selectedNum, setSelectedNum] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [err, setErr] = useState()
  const [rules, setRules] = useState(false)
  const array = [1,2,3,4,5,6]
  

  function seltNum(val){
    setSelectedNum(val)
    setErr("")
  }

  

  function genRanNum(){
    return Math.ceil(Math.random() * 6);
  }

  function rollDice(){
    if(!selectedNum){
        setErr("you have not selected any number :(") 
        return
    }
    const randomNum = genRanNum()
    setCurrentDice((prev) => randomNum);
  }

  useEffect(()=>{
    if(selectedNum === currentDice){
      setScore((prev)=>prev+6)
    }else{
      setScore((prev)=>prev-2)
    }
    setSelectedNum((prev)=> null)
  },[currentDice])


  return (
  
    <div id='container' className='flex flex-col  w-full h-screen items-center bg-slate-200'>
    
    {/* score */}
    <h1 className='text-5xl p-9'>score : <span className='text-cyan-700 font-bold'>{score}</span></h1>

    {/* num selector */}
    <div id='arr' className='flex'>
      {array.map((val, i)=>(
        <div 
        key={i}
        className='h-10 cursor-pointer w-10 m-1 hover:bg-white hover:text-black bg-black text-white text-center'  
        onClick={()=>seltNum(val)}
        >
          {val}          
        </div>
      ))}
    </div>
    <p className=''>selected number : <span className='text-cyan-700 font-semibold'>{selectedNum}</span></p>
    <p className='text-sm text-red-700 '>{err}</p>

    {/* roll dice */}
    <div 
    id='dice'
    className='h-32 w-32 mt-8 cursor-pointer'
    onClick={rollDice}>
    <img src={`https://github.com/anshuopinion/React-10-Projects/blob/project-3/project-3/public/images/dice/dice_${currentDice}.png?raw=true`} alt={currentDice}/>
    </div>
    <p className='text-xl'>dice value is : {currentDice}</p>
    <p className='text-xl'>click on dice to roll</p>
    <div className='text-center'>
      <button 
      onClick={()=>setScore(0)}
      className='border-2  rounded-md px-2 text-white bg-cyan-700 my-2 hover:bg-cyan-950 '>Reset</button>
      <button 
      onClick={()=>setRules((prev)=>!prev)}
      className='border-2  rounded-md px-2 text-white bg-cyan-700 my-2 hover:bg-cyan-950 '>{rules ? "Hide" : "Show Rules"}</button>
      {rules && <Rules/>}
    </div>
   </div>
  )
}

export default Play
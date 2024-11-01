import React from 'react'

function Rules() {
  return (
    <div className='flex flex-col text-center bg-slate-400 m-5 rounded-lg'>
        <h1  className='font-semibold text-sm p-4 text-blue-950'>How to play dice game</h1>
          <p className='font-semibold text-sm p-4'>
            Select any number : <br />
            Click on dice image : <br />
            after click on  dice  if selected number is equal to dice number you will get +6 point : <br />
            if you get wrong guess then  2 point will be dedcuted : <br />

          </p>
    </div>
  )
}

export default Rules
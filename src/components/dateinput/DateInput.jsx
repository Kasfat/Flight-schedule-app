import React, { useState } from 'react'

function DateInput(props) {
  
  return (
    <div className='w-full h-[50px] bg-white flex items-center border-[2px] border-[#e5e5e5] '>
    <input className=" border-none outline-none h-full w-full bg-white text-xl font-normal p-2"
        {...props}
    />
  </div>
  )
}

export default DateInput
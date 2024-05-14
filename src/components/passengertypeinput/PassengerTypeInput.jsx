import React from 'react'

function PassengerTypeInput(props) {
  return (
    <div className='w-full h-[50px] bg-white flex items-center border-[2px] border-[#e5e5e5]'>
        <select className=" border-none outline-none h-full w-full bg-white text-xl font-normal p-2" {...props}>
        <option className=' h-full w-full' value="adult">Adult</option>
        <option className=' h-full w-full' value="child">Children</option>
      </select>
    </div>
  )
}

export default PassengerTypeInput
import React from 'react'

function TravelType({children,background}) {
  return (
    <div className={`w-[130px] border-2 border-[#322F82] text-center py-2 cursor-pointer font-semibold ${background ? 'bg-[#2E3791] text-white' : ''}`}>{children}</div>
  )
}

export default TravelType
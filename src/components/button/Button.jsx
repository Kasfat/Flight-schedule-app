import React from "react";

function Button({ children, clickHandler }) {
  return (
    <button onClick={()=>clickHandler()} className=" w-[160px] border-[1px] bg-[#2E3791] p-2 text-white text-center rounded cursor-pointer">
      {children}
    </button>
  );
}

export default Button;

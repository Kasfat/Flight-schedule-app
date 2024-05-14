import React from "react";

function TextInput(props ) {
  return (
    <div className=" w-full h-[50px] bg-white flex items-center border-[2px] border-[#e5e5e5] p-2">
      <input
        className=" border-none outline-none h-full w-full bg-white text-xl font-normal"
        {...props}
      />
    </div>
  );
}

export default TextInput;

import React from "react";
import { GoBell } from "react-icons/go";
import ProfileImg from "../../assets/images/profile_img.jpg";

function Navbar() {
  return (
    <>
      <div className="bg-[#1F2937]">
        <div className=" flex mx-20 justify-between items-center  py-5">
          <ul className=" flex  text-white gap-6 leading-5">
            <li>Dashboard</li>
            <li>Master Price</li>
            <li>Custom price</li>
            <li>Calender</li>
            <li>Reports</li>
          </ul>

          <div className=" flex items-center gap-3">
            <GoBell className=" text-white" />
            <img
              src={ProfileImg}
              className=" rounded-full w-5 h-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

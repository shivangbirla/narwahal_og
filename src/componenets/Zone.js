import React from "react";
import Inventory from "./Inventory";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import ship_image from "../assets/ship_image.png";
import click_image from "../assets/click_image.png";
import ZoneLoader from "./ZoneLoader";

const Zone = ({ searchValue, setSearchValue }) => {
  // if(true) return <ZoneLoader/>
  return (
    <div className="w-screen bg-[#F8F9FA] flex gap-6 h-screen">
      <div className="w-[256px] "></div>
      <div className="w-[0.5px] h-full bg-[#D9D9D9]"></div>
      <div className="w-full px-8 flex flex-col gap-6">
        <Navbar setSearchValue={setSearchValue} />
        <Inventory />
        <div className="flex gap-9 justify-between">
          <Showcase />
          <div className="flex flex-col w-[400px] justify-between">
            <div className="flex justify-center items-center w-[318.689px] h-[172px] bg-white border-[1.77px] border-[#B7E0FF]">
              <img src={ship_image} alt="" />
            </div>
            <div className="flex flex-col mb-9">
              <img src={click_image} className="w-[343px] h-[172px] " alt="" />
              <p className="text-[#727272] text-base text-center">“Click” to zoom in the box.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default Zone;

// box of level1 will be stored and then make an array with the order of boxno.
// then map that data and after every 4th box start iterating from start with higher margin

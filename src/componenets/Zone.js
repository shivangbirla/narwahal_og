
import React, { useState } from "react";
import Inventory from "./Inventory";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import ship_image from "../assets/ship_image.png";
import click_image from "../assets/click_image.png";
import ZoneLoader from "./ZoneLoader";
import Sidebar from "./Sidebar";
import { Divider } from "@mui/material";

const Zone = ({ searchValue, setSearchValue }) => {
  const [loading, setloading] = useState(true)
  setTimeout(() => {
    setloading(false)
  }, 1000);
  if(loading) return <ZoneLoader/>
  return (
    <div className=" h-auto w-screen px-9 min-h-screen box-border  bg-[#F8F9FA] flex lg:gap-6 ">
      <div className=" hidden lg:block">
        <Sidebar className="" />
      </div>

      <Divider
        orientation="vertical"
        className="hidden lg:block px-1"
        flexItem
      />
      <div className="   flex flex-col gap-6">
        <Navbar setSearchValue={setSearchValue} />
        <Inventory isZone={true} />
        <div className="flex w-full  flex-col md:flex-row gap-9 justify-between">
          <Showcase setloading={setloading}/>
          <div className="flex flex-col   justify-between ">
            <div className="flex justify-center items-center mx-auto w-fit h-auto  lg:max-w-[318.689px] h-[172px] bg-white border-[1.77px] border-[#B7E0FF]">
              <img src={ship_image} className="" alt="" />
            </div>
            <div className="flex flex-col mb-9 mt-9 mx-auto">
              <img src={click_image} className="w-[343px] h-[172px] " alt="" />
              <p className="text-[#727272] text-base text-center">
                “Click” to zoom in the box.
              </p>
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

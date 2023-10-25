import React from "react";
import Logotemp from "../assets/Logotemp.png";
import { Skeleton } from "@mui/material";
import SideNavLoading from "./loading/SideNavLoading";
import InventoryLoading from "./loading/InventoryLoading";
import SeachNavLoading from "./loading/SearchNavLoading";
import ShowcaseLoading from "./loading/ShowcaseLoading";

const ZoneLoader = () => {
  return (
    <div className="w-screen bg-[#F8F9FA] flex gap-6 h-screen">
      <div className="w-[256px] flex flex-col gap-7 pl-6 pt-8">
        <div className="flex flex-col">
          <img src={Logotemp} className="w-[97px] h-5 " alt="" />
          <h1 className="text-black font-normal text-lg">
            Project Narwhal
          </h1>
        </div>
        <SideNavLoading />
      </div>
      <div className="w-[0.5px] h-full bg-[#D9D9D9]"></div>
      <div className="w-full px-8 py-4 flex flex-col">
        <SeachNavLoading />
        <InventoryLoading />
        <ShowcaseLoading />
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default ZoneLoader;

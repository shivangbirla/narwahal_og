import React from "react";
import Logotemp from "../assets/Logotemp.png";
import { Divider, Skeleton } from "@mui/material";
import SideNavLoading from "./loading/SideNavLoading";
import InventoryLoading from "./loading/InventoryLoading";
import SeachNavLoading from "./loading/SearchNavLoading";
import ShowcaseLoading from "./loading/ShowcaseLoading";

const ZoneLoader = () => {
  return (
    <div className="h-auto w-screen px-9 min-h-screen box-border overflow-y-scroll  bg-[#F8F9FA] flex lg:gap-6 pb-5">
      <div className="w-[256px] flex flex-col gap-7 pl-6 pt-8">
        <div className=" hidden lg:block">
          <div className="flex flex-col">
            <img src={Logotemp} className="w-[97px] h-5 " alt="" />
            <h1 className="text-black font-normal text-lg">Project Narwhal</h1>
          </div>
          <SideNavLoading />
        </div>
      </div>
      <Divider
        orientation="vertical"
        className="hidden lg:block px-1"
        flexItem
      />
      <div className="flex flex-col gap-6">
        <SeachNavLoading />
        <InventoryLoading />
        <ShowcaseLoading />
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default ZoneLoader;

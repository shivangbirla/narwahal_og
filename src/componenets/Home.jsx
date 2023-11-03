import React from "react";
import Navbar from "./Navbar";
import Area from "./Area";
import Inventory from "./Inventory";
import Sidebar from "./Sidebar";
import Base from "./Base";
import { Divider } from "@mui/material";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <div className=" h-auto w-screen px-9 min-h-screen box-border overflow-y-scroll  bg-[#F8F9FA] flex lg:gap-6 pb-5">
      <div className=" hidden lg:block">
        <Sidebar className="" />
      </div>

      <Divider
        orientation="vertical"
        className="hidden lg:block px-1"
        flexItem
      />
      <div className="flex  w-full flex-col gap-6 mb-48 md:mb-auto h-fit">
        <Navbar setSearchValue={setSearchValue} />
        <Inventory />
        <div className="max-w-[1213px]">
          <Base className="" />
        </div>
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default Home;

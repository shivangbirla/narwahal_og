import React from "react";
import Navbar from "./Navbar";
import Area from "./Area";
import Inventory from "./Inventory";
import Sidebar from "./Sidebar";
import Base from "./Base";
import { Divider } from "@mui/material";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <div className=" h-auto w-screen px-9 min-h-screen box-border  bg-[#F8F9FA] flex lg:gap-6">
      <div className=" hidden lg:block">
        <Sidebar className="" />
      </div>

      <Divider
        orientation="vertical"
        className="hidden lg:block px-1"
        flexItem
      />
      <div className="flex flex-col gap-6">
        <Navbar setSearchValue={setSearchValue} />
        <Inventory />

        <Base />
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default Home;

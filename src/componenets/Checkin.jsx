import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Divider } from "@mui/material";
import Cin_table from "./Cin_table";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <div className="h-auto w-screen pr-9 min-h-screen box-border overflow-y-scroll bg-[#F8F9FA] flex lg:gap-0 pb-5">
      <div className="hidden lg:block">
        <Sidebar className="" />
      </div>
      <Divider orientation="vertical" className="hidden lg:block" flexItem />
      <div className="flex w-full flex-col pl-[50px] gap-6 mb-48 md:mb-auto h-fit">
        <Navbar setSearchValue={setSearchValue} />
        <Cin_table />
      </div>
    </div>
  );
};

export default Home;

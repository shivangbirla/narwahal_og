import React from "react";
import Navbar from "./Navbar";
import Area from "./Area";
import Inventory from "./Inventory";
import Sidebar from "./Sidebar";
import Base from "./Base";
import { Divider } from "@mui/material";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <div className="flex flex-col gap-10">
      <Inventory />
      <div className="max-w-[1213px]">
        <Base className="" />
      </div>
    </div>
  );
};

export default Home;

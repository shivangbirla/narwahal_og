import React from "react";
import Navbar from "./Navbar";
import Area from "./Area";
import Inventory from "./Inventory";
import Sidebar from "./Sidebar";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <div className="w-screen bg-[#F8F9FA] flex gap-6 h-screen">
      <Sidebar />

      <div className="w-[0.5px] h-full bg-[#D9D9D9]"></div>
      <div className="w-full px-8 flex flex-col">
        <Navbar setSearchValue={setSearchValue} />
        <Inventory />
      </div>

      {/* <Area searchValue={searchValue} /> */}
    </div>
  );
};

export default Home;

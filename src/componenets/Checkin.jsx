import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Divider } from "@mui/material";
import Cin_table from "./Cin_table";

const Home = () => {
  return (
    <div className="flex  flex-col  gap-6 mb-48 md:mb-auto h-fit">
      <Cin_table />
    </div>
  );
};

export default Home;

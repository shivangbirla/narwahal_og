import React, { useContext } from "react";
import Navbar from "./Navbar";
import Area from "./Area";
import Inventory from "./Inventory";
import Sidebar from "./Sidebar";
import Base from "./Base";
import { Divider } from "@mui/material";
import { MainContext } from "./Context";
import Zone from "./Zone";
import toast from "react-hot-toast";
import Product from "./Product";

const Home = ({ searchValue, setSearchValue }) => {
   const {
     selectedSide,
     setSelectedSide,
     area,
     setArea,
     deck,
     setDeck,
     zone,
     setZone,
     page,
     setPage,
   } = useContext(MainContext);

   if(page ==="ZONE"){
    return <Zone />
   }
   if(page ==="PRODUCT"){
    return <Product />
   }
  //  toast.success("hello world!");
  return (
    <div className="flex flex-col gap-10 ">
      <Inventory />
      <div className="max-w-[1213px] md:rotate-0 w-full md:h-[417px] h-[60vh]  ">
        <div className=" w-full h-full">
          <Base className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Divider, Drawer } from "@mui/material";
import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContext } from "./componenets/Context";
import Sidebar from "./componenets/Sidebar";

import { Toaster } from "react-hot-toast";
import Checkin from "./componenets/Checkin";
import Checkout from "./componenets/Checkout";
import InventoryHome from "./componenets/InvertoryHome";
import Navbar from "./componenets/Navbar";
import Pms from "./componenets/Pms";
import Spo from "./componenets/Spo";




const App = () => {
  const [searchValue, setSearchValue] = useState("areaa");
  const { open, setOpen } = useContext(MainContext);

  return (
    <div className=" ">
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <div className="w-[300px] pl-6">
            <Sidebar />
          </div>
        </Drawer>
      </React.Fragment>
      {/* <Base /> */}

      <Toaster
        toastOptions={{
          className: "",
          style: {
            // border: "1px solid #713200",
            padding: "16px",
            fontSize: "16px",
            minHeight: "40px",
            gap: "16px",
            // color: "#713200",
          },
        }}
      />

      <div className="h-full w-screen pr-9 min-h-screen box-border overflow-y-scroll bg-[#F8F9FA] flex lg:gap-0 pb-5">
        <div className="hidden xl:block">
          <Sidebar className="" />
        </div>
        <Divider orientation="vertical" className="hidden xl:block" flexItem />
        <div className="flex w-full flex-col  pl-14 gap-6 mb-48 md:mb-auto h-fit">
          <Navbar setSearchValue={setSearchValue} />
          <Routes>
            <Route
              path="/"
              element={
                <InventoryHome/>
              }
            />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pms" element={<Pms />} />
            
            <Route path="/spo" element={<Spo />} />
            {/* <Route path="/test" element={<Inventory_listview />} /> */}
          </Routes>
        </div>
      </div>
    </div>
      // <Signup />
  );
};

export default App;

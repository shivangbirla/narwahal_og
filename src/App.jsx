import { Divider, Drawer } from "@mui/material";
import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContext } from "./componenets/Context";
import Home from "./componenets/Home";
import Sidebar from "./componenets/Sidebar";

import { Toaster } from "react-hot-toast";
import Navbar from "./componenets/Navbar";
import Pms from "./componenets/Pms";
import Checkout from "./componenets/Checkout";
import Checkin from "./componenets/Checkin";
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

      <div className="h-auto w-screen pr-9 min-h-screen box-border overflow-y-scroll bg-[#F8F9FA] flex lg:gap-0 pb-5">
        <div className="hidden lg:block">
          <Sidebar className="" />
        </div>
        <Divider orientation="vertical" className="hidden lg:block" flexItem />
        <div className="flex w-full flex-col pl-6 gap-6 mb-48 md:mb-auto h-fit">
          <Navbar setSearchValue={setSearchValue} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pms" element={<Pms />} />
            <Route path="/spo" element={<Spo />} />
          </Routes>
        </div>
      </div>
    </div>
    // <Signup />
  );
};

export default App;

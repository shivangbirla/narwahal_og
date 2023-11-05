import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Zone from "./componenets/Zone";
import Home from "./componenets/Home";
import Sidebar from "./componenets/Sidebar";
import Base from "./componenets/Base";
import { MainContext } from "./componenets/Context";
import { Divider, Drawer } from "@mui/material";
import Signup from "./componenets/Signup";
import Navbar from "./componenets/Navbar";

const App = () => {
  const [searchValue, setSearchValue] = useState("areaa");
  const { open, setOpen } = useContext(MainContext);

  if(false) return <Signup />
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

      <div className="h-auto w-screen pr-9 min-h-screen box-border overflow-y-scroll bg-[#F8F9FA] flex lg:gap-0 pb-5">
        <div className="hidden lg:block">
          <Sidebar className="" />
        </div>
        <Divider orientation="vertical" className="hidden lg:block" flexItem />
        <div className="flex w-full flex-col pl-[50px] gap-6 mb-48 md:mb-auto h-fit">
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
            <Route path="/zone" element={<Zone />} />
          </Routes>
        </div>
      </div>
    </div>
    // <Signup />
  );
};

export default App;

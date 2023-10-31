import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Zone from "./componenets/Zone";
import Home from "./componenets/Home";
import Sidebar from "./componenets/Sidebar";
import Base from "./componenets/Base";
import { MainContext } from "./componenets/Context";
import { Drawer } from "@mui/material";
import Signup from "./componenets/Signup";

const App = () => {
  const [searchValue, setSearchValue] = useState("areaa");
  const { open, setOpen } = useContext(MainContext);
  return (
    // <div className=" ">
    //   <React.Fragment key={"left"}>
    //     <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
    //       <div className="w-[300px] pl-6">
    //         <Sidebar />
    //       </div>
    //     </Drawer>
    //   </React.Fragment>
    //   {/* <Base /> */}
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <Home searchValue={searchValue} setSearchValue={setSearchValue} />
    //       }
    //     />
    //     <Route path="/zone" element={<Zone />} />
    //   </Routes>
    // </div>
    <Signup />
  );
};

export default App;

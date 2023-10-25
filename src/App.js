import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Zone from "./componenets/Zone";
import Home from "./componenets/Home";
import Sidebar from "./componenets/Sidebar";

const App = () => {
  const [searchValue, setSearchValue] = useState("areaa");
  return (
    <>
      <Sidebar />
      {/* <Routes>
        <Route
          path="/"
          element={
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
          }
        />
        <Route path="/zone" element={<Zone />} />
      </Routes> */}
    </>
  );
};

export default App;

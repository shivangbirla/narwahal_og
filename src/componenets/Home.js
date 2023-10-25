import React from "react";
import Navbar from "./Navbar";
import Area from "./Area";

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <Navbar setSearchValue={setSearchValue} />
      <Area searchValue={searchValue} />
    </>
  );
};

export default Home;

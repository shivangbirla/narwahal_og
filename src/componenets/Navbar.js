import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({ searchValue, setSearchValue }) => {
  const [selectedArea, setSelectedArea] = useState("areaa");

  const handleAreaClick = (area) => {
    setSearchValue(area);
    setSelectedArea(area);
  };

  return (
    <>
      <div className="bg-[#e9ecef] p-4 ">
        <nav className="bg-[#f8f9fa] shadow-md rounded-lg">
          

          <div className="flex flex-row bg-[#D7EDFF] p-1.5">
            <div className="relative ml-14 my-4 w-2/3 md:w-1/3">
              <input
                type="text"
                className="w-full py-2 pr-12 pl-4 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Search Here"
              />
              <div className="absolute top-0 right-0 mt-2 mr-4">
                <AiOutlineSearch className="h-7 w-7 text-gray-600" />
              </div>
            </div>
            <div className="my-auto ml-auto mr-2 flex flex-row justify-center items-center">
              <button className="bg-white text-gray-700 font-bold px-5 py-1 rounded-full shadow-md">
                NARWAHAL_UI
              </button>
              <div className="w-[50px] h-[4px] bg-white shadow-md"></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

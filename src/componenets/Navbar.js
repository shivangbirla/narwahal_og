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
      <div className="bg-[#e9ecef] p-4 h-[35vh]">
        <nav className="bg-[#f8f9fa] shadow-md rounded-lg">
          <div className="container mx-auto flex justify-between items-center p-1.5 border-b-2">
            <div className="ml-6 mt-1.5 mb-1.5 flex flex-row space-x-16">
              <div className="flex flex-row justify-center items-center">
                <button className="px-6 py-1 rounded-full border-2">
                  Deck 3rd
                </button>
                <div className="w-[50px] h-[4px] border-2"></div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <button className="px-6 py-1 rounded-full border-2">
                  Deck 2nd
                </button>
                <div className="w-[50px] h-[4px] border-2"></div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex justify-between items-center p-1.5 border-b-2">
            <div className="ml-6 space-x-8 mt-1.5 mb-1.5">
              <button
                className={`text-gray-700 px-5 py-1 rounded-full border-2 ${
                  selectedArea === "areaa"
                    ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                    : ""
                }`}
                onClick={() => handleAreaClick("areaa")}
              >
                Area A
              </button>

              <button
                className={`text-gray-700 px-5 py-1 rounded-full border-2 ${
                  selectedArea === "areab"
                    ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                    : ""
                }`}
                onClick={() => handleAreaClick("areab")}
              >
                Area B
              </button>

              <button
                className={`text-gray-700 px-5 py-1 rounded-full border-2 ${
                  selectedArea === "areac"
                    ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                    : ""
                }`}
                onClick={() => handleAreaClick("areac")}
              >
                Area C
              </button>

              <button
                className={`text-gray-700 px-5 py-1 rounded-full border-2 ${
                  selectedArea === "aread"
                    ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                    : ""
                }`}
                onClick={() => handleAreaClick("aread")}
              >
                Area D
              </button>
            </div>
          </div>

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

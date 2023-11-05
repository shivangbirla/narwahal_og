import React from "react";
import { Link } from "react-router-dom";
import { areaa, areab, areac, aread } from "../data/data.js";
import ship_png from "../assets/ship_bg.png";

const Area = ({ searchValue }) => {
  let selectedData;
  switch (searchValue) {
    case "areaa":
      selectedData = areaa.title;
      break;
    case "areab":
      selectedData = areab.title;
      break;
    case "areac":
      selectedData = areac.title;
      break;
    case "aread":
      selectedData = aread.title;
      break;
    default:
      selectedData = [];
  }

  return (
    <>
      <div className="bg-[#e9ecef] px-4 py-6 pt-0 h-[65vh]">
        <div className="container p-10 pt-4 pb-8 mx-auto bg-[#f8f9fa] shadow-md rounded-lg">
          <div className="mb-4 ml-28">
            <h1 className="uppercase font-bold text-[18px]">{searchValue}</h1>
          </div>
          <div className="relative">
            <img
              src={ship_png}
              alt="Rack"
              className="h-[340px] w-[1000px] ml-24"
            />
            <div className="absolute top-5 left-[140px] grid grid-cols-3 gap-x-16 gap-y-5">
              {selectedData.map((value, index) => (
                <Link key={index} to="/zone">
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-700 to-gray-400 p-4 rounded-lg flex justify-center items-center h-[140px] w-[200px]"
                  >
                    <h2 className="text-xl font-semibold text-gray-200 text-center">
                      {value.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Area;

import React from "react";
import search from "../assets/search.png";

const InputBox = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-full mr-[10px]">
      <img
        src={search}
        alt="Search"
        className="absolute left-3 top-[22px] transform -translate-y-1/2 w-[24px] h-[24px] text-gray-400"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full"
      />
    </div>
  );
};

export default InputBox;

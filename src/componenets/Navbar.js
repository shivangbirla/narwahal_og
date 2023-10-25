import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import question from "../assets/questionmark.png";
import hamburger from "../assets/alternateHamburgerMenu.svg";
import questionWithOutline from "../assets/questionwithround.svg"
import bell from "../assets/bell.svg"
import avatar from "../assets/avatar.png"


const Navbar = ({ searchValue, setSearchValue }) => {
  const [selectedArea, setSelectedArea] = useState("areaa");


  const handleAreaClick = (area) => {
    setSearchValue(area);
    setSelectedArea(area);
  };

  return (
    <div className="flex justify-between py-2 my-4 ">
      <div className="flex rounded-full bg py-2 px-5 bg-[#D8EEFF] w-[743px] justify-between items-center">
        <img src={question} alt="" className="w-[17px] h-[17px]" />
        <input
          type="text"
          className="px-3 bg-inherit outline-none border-none  w-full"
          src=""
        />
        <img src={hamburger} alt="" />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-xl">
          <img src={questionWithOutline} className="w-[24px] h-[24px]" alt="" />
        </div>
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-xl">
          <img src={bell} className="w-[24px] h-[24px]" alt="" />
        </div>

        <img src={avatar} />

        <p className="text-lg font-normal">Himanshu Tiwari</p>
      </div>
    </div>
  );
};

export default Navbar;

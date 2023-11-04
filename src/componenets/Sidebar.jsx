import React, { useState } from "react";
import checking_in_img from "../assets/checking_in_img.png";
import checkout_img from "../assets/checkout_img.png";
import icon_img from "../assets/Icon.png";
import inventory_img from "../assets/inventory_img.png";
import narwahal_logo from "../assets/narwahal_logo.png";
import pms_img from "../assets/pms_img.png";
import sparepartorder_img from "../assets/sparepartorder_img.png";

import randomImg from "../assets/random.svg";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const menuItems = [
    {
      img: pms_img,
      alt: "PMS",
      text: "PMS",
    },
    {
      img: checking_in_img,
      alt: "Check in",
      text: "Check in",
    },
    {
      img: checkout_img,
      alt: "Check out",
      text: "Check out",
    },
    {
      img: inventory_img,
      alt: "Inventory",
      text: "Inventory",
    },
    {
      img: sparepartorder_img,
      alt: "Spare Part Order",
      text: "Spare Part Order",
    },
  ];

  return (
    <>
      <nav className="box-border border-box h-full bg-inherit w-[20vw]">
        <div className="flex flex-col pt-[30px] mb-6 px-10">
          <img
            src={narwahal_logo}
            alt="narwahal_logo"
            className="w-[98px] h-[21px]"
          />
          <span className="w-[126px] h-[22px]">Project Narwhal</span>
        </div>

        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`w-full h-[65px] flex items-center gap-5 cursor-pointer px-10 ${
                selectedItem === item.alt ? "bg-[#61D0F1] shadow-md" : ""
              } transition-transform transform-gpu `}
              onClick={() => handleItemClick(item.alt)}
            >
              <div className="flex justify-center items-center rounded-xl bg-white w-[35px] h-[35px] ">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-[24px] h-[24px]"
                />
              </div>
              <span className="text-[14px]">{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="w-[251px] h-[190.5px] bg-[#47AFFF] mx-10 mt-5 pt-[1px] rounded-lg">
          <img
            alt="icon"
            src={icon_img}
            className="w-[33px] h-[35px] m-5 cursor-pointer"
          />
          <span className="text-[#ffffff] block ml-4 text-[14px]">
            Need Help?
          </span>
          <span className="text-[#ffffff] block text-[13px] ml-4">
            Please check our docs
          </span>
          <button
            className={`w-[214px] h-[40px] bg-white rounded-xl ml-4 mt-2 cursor-pointer ${
              selectedItem === "documentation"
                ? "active:scale-95 transition-all duration-20 ease-in-out shadow-md"
                : ""
            }`}
            onClick={() => setSelectedItem("documentation")}
          >
            <span className="text-black text-[12px] font-semibold">
              DOCUMENTATION
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

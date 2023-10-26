import React, { useState } from "react";
import area from "../assets/area.svg";
import selected_area from "../assets/selected_area.svg";

const Base = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="w-fit max-w-[813px]  mt-[300px] sm:mt-52">
      {selected ? (
        <img
          src={selected_area}
          alt="selected area"
          className=" h-auto object-cover rotate-90 md:rotate-0 scale-150 sm:scale-100 cursor-pointer"
          onClick={toggleSelected}
        />
      ) : (
        <img
          src={area}
          alt="area"
          className={` h-auto object-cover rotate-90 md:rotate-0 scale-150 sm:scale-100 cursor-pointer ${
            selected ? "hidden" : ""
          }`}
          onClick={toggleSelected}
        />
      )}
    </div>
  );
};

export default Base;

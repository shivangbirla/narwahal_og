import React, { useState } from "react";
import area from "../assets/area.svg";
import selected_area from "../assets/selected_area.svg";

const Base = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="h-screen w-screen m-40">
      {selected ? (
        <img
          src={selected_area}
          alt="selected area"
          className="w-[900px] h-auto object-cover cursor-pointer"
          onClick={toggleSelected}
        />
      ) : (
        <img
          src={area}
          alt="area"
          className={`w-[900px] h-auto object-cover cursor-pointer ${
            selected ? "hidden" : ""
          }`}
          onClick={toggleSelected}
        />
      )}
    </div>
  );
};

export default Base;

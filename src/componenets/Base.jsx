import React, { useState } from "react";
import area from "../assets/area.svg";
import selected_area from "../assets/selected_area.svg";
import { useNavigate, useRoutes } from "react-router-dom";

const Base = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  // const toggleSelected = () => {
  //   setSelected(!selected);
  //   setTimeout(() => {
  //     navigate("/zone")
  //   }, 1000);
  // };

  return (
    <div className="flex gap-0 rotate-90 md:rotate-0 md:h-[417px] relative md:w-full h-[70vw] w-[50vh] ">
      <div className="w-[60%] h-full p-2 flex gap-2 z-10 bg-white rounded-l-2xl">
        <div className="w-1/2 h-full flex flex-col gap-2">
          <button className="w-full h-2/3 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border">
            Zone-4
          </button>
          <button className="w-full h-1/3 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border">
            Zone-5
          </button>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2">
          <button className="w-full h-1/2 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border">
            Zone-3
          </button>
          <button className="w-full h-1/2 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border">
            Zone-3
          </button>
        </div>
      </div>
      <div className="left-[20%] z-0  overflow-hidden p-2 absolute w-[80%] h-full  bg-white rounded-r-[50%]">
        <div className=" w-full h-full  rounded-r-[50%] flex justify-end overflow-hidden">
          <div className="h-full w-full"></div>
          <div className="h-full w-2"></div>
          <button className="w-full h-full rounded-l-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border">
            Zone-1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Base;

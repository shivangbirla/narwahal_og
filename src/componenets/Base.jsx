import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MainContext } from "./Context";

const Base = () => {
  const {
    area,
    deck,
    setZone,
    setPage,
  } = useContext(MainContext);

  // const toggleSelected = () => {
  //   setSelected(!selected);
  //   setTimeout(() => {
  //     navigate("/zone")
  //   }, 1000);

  // };
  const handleClick = (zone) => {
    // navigate({
    //   pathname: "/zone",
    //   search: `?${createSearchParams({
    //     deck: deck,
    //     area: area,
    //     zone: zone,
    //   })}
    // });
    // toast.success("hello world!");
    console.log(area,deck,zone)
    if(!zone || !deck || !area){
      toast.error("Please select a deck, area and  than zone");
    }

    
    setZone(zone)
    setPage("ZONE")
  };

  return (
    <div className="flex gap-0 md:scale-100 md:rotate-0 rotate-90 w-full h-full scale-y-[.6] relative   ">
      <div className="w-[60%] h-full p-2 flex gap-2 z-10 bg-white rounded-l-2xl">
        <div className="w-1/2 h-full flex flex-col gap-2">
          <button
            onClick={() => handleClick("4")}
            className="w-full h-2/3 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border"
          >
            Zone-4
          </button>
          <button
            onClick={() => handleClick("4")}
            className="w-full h-1/3 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border"
          >
            Zone-5
          </button>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2">
          <button
            onClick={() => handleClick("3")}
            className="w-full h-1/2 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border"
          >
            Zone-3
          </button>
          <button
            onClick={() => handleClick("2")}
            className="w-full h-1/2 rounded-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border"
          >
            Zone-2
          </button>
        </div>
      </div>
      <div className="left-[20%] z-0  overflow-hidden p-2 absolute w-[80%] h-full  bg-white rounded-r-[50%]">
        <div className=" w-full h-full  rounded-r-[50%] flex justify-end overflow-hidden">
          <div className="h-full w-full"></div>
          <div className="h-full w-2"></div>
          <button
            onClick={() => handleClick("1")}
            className="w-full h-full rounded-l-xl bg-[#C9E6FD] hover:bg-sky-300 hover:border-sky-800 hover:border"
          >
            Zone-1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Base;

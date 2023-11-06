/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
import { Divider } from "@mui/material";
import React, { useContext } from "react";
import rack_png from "../assets/rack_image_1.png";
import { cn } from "../lib/utils";
import Box from "./Box";
import { MainContext } from "./Context";

const Showcase = ({flag=false,divider=false}) => {
 const {arr,area,deck,zone} = useContext(MainContext)
  

  return (
    <div
      className={cn(
        " h-full  box-border flex flex-col gap-4 bg-white rounded-3xl  justify-center",
        !flag && "px-6 md:px-10 py-8"
      )}
    >
      {divider && (
        <>
          <div className="w-full text-black text-xl font-normal">
            Deck-{deck} &gt; Area-{area} &gt; Zone-
            {zone} 
          </div>
          <Divider className="w-full " />
        </>
      )}
      <div className="flex flex-row  h-full mx-auto">
        <div className="relative">
          <img
            src={rack_png}
            alt="Rack"
            className="h-full w-full max-w-[430px]"
          />

          <div className="absolute flex flex-col h-[76.7%] gap-[13.6%] top-0 w-[calc(100%-20px)] left-[10px]">
            {arr.map((boxes) => {
              return (
                <div className="flex  top-[5%]    h-[80px]  ">
                  {boxes.slice(0, 2).map((box, index) => (
                    <Box key={index} index={index} box={box} className="mx-2" />
                  ))}
                  <div className="w-[40px]"></div>
                  {boxes.slice(2).map((box, index) => (
                    <Box key={index} index={index} box={box} className="mx-2" />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

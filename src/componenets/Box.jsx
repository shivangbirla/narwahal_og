import React, { useContext } from "react";
import { MainContext } from "./Context";

// TODO: keep wood after metal in array

const Box = ({ box, index }) => {
  const { selectedBox, setBox } = useContext(MainContext);
  const handleClick = (selected) => {
    setBox(selected);
  };

  return (
    <div className="flex flex-col gap-[3px] w-full h-full">
      {box?.length > 1 ? (
        <div className="w-full h-1/2">
          <div
            className="w-2/3 h-full mx-auto flex justify-center items-center text-sm font-bold text-white bg-amber-800 rounded-lg"
            onClick={() => {
              handleClick(box[1]);
            }}
          >
            {box[1].box}
          </div>
        </div>
      ) : (
        <div className=" w-full h-1/2"></div>
      )}

      {!!box &&
        (box[0].type === "metal" ? (
          <div
            className="bg-slate-600 h-1/2 w-5/6 mx-auto flex justify-center items-center text-sm font-bold text-white rounded-lg"
            onClick={() => {
              handleClick(box[0]);
            }}
          >
            {box[0].box}
          </div>
        ) : (
          <div
            className="w-2/3 h-1/2 mx-auto flex justify-center items-center text-sm font-bold text-white bg-amber-800 rounded-lg"
            onClick={() => {
              handleClick(box[0]);
            }}
          >
            {box[0].box}
          </div>
        ))}
    </div>
  );
};

export default Box;

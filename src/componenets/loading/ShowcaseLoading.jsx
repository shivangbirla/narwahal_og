import { Skeleton } from "@mui/material";
import React from "react";
import loadinggirl from "../../assets/loadinggirl.png";


const ShowcaseLoading = () => {
  return (
    <div className="flex w-full  flex-col md:flex-row gap-9 justify-between">
      <div className="bg-white rounded-xl p-4  flex flex-col w-[812px] h-[535px] gap-5">
        <div className="flex gap-2 items-center ">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rounded" width={123} height={13} />
        </div>
        <img src={loadinggirl} className="mx-auto w-[358px] h-[341px]" alt="loading" />
      </div>

      <div className="flex bg-white p-4 rounded-lg w-[306px] h-[201px]">
        <Skeleton variant="rounded" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ShowcaseLoading;

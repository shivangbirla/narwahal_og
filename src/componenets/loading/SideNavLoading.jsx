import { Skeleton } from '@mui/material';
import React from 'react'

const SideNavLoading = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <Skeleton variant="circular" width={35} height={35} />
          <Skeleton variant="rectangular" width={109} height={7} />
        </div>
        <div className="flex gap-5 items-center">
          <Skeleton variant="circular" width={35} height={35} />
          <Skeleton variant="rectangular" width={109} height={7} />
        </div>
        <div className="flex gap-5 items-center">
          <Skeleton variant="circular" width={35} height={35} />
          <Skeleton variant="rectangular" width={109} height={7} />
        </div>
        <div className="flex gap-5 items-center">
          <Skeleton variant="circular" width={35} height={35} />
          <Skeleton variant="rectangular" width={109} height={7} />
        </div>
        <div className="flex gap-5 items-center">
          <Skeleton variant="circular" width={35} height={35} />
          <Skeleton variant="rectangular" width={109} height={7} />
        </div>
      </div>
      <div className="w-[251px] px-2 h-[190px]  py-4 flex flex-col justify-between  rounded-2xl bg-[#D8D8D8]">
        <Skeleton variant="circular" width={35} height={35} />
        <Skeleton variant="rounded" className='self-center w-[95%]' height={39} />
      </div>
    </div>
  );
}

export default SideNavLoading
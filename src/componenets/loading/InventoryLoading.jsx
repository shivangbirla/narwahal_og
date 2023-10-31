import { Skeleton } from '@mui/material';
import React from 'react';
const Inventory = () => {
  

  return (
    <div className="h-[238px] bg-white gap-9 p-7 flex flex-col rounded-2xl">
      <Skeleton variant="rounded" width={158} height={30} />
      <div className=" rounded-lg gap-3 flex  items-center">
        <Skeleton height={35} variant="rounded" className="w-full" />
      </div>
      <div className="flex gap-6">
        <Skeleton variant="rounded" width={130} height={35} />
        <Skeleton variant="rounded" width={130} height={35} />
        <Skeleton variant="rounded" width={130} height={35} />
      </div>
    </div>
  );
}

export default Inventory
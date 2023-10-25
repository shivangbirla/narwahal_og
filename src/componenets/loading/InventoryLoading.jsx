import React, { useState } from 'react'
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Skeleton } from '@mui/material';
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
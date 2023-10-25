import { Skeleton } from "@mui/material";
import React from "react";

const SeachNavLoading = () => {
  return (
    <div className="flex justify-between px-2 py-4">
      <Skeleton
        variant="rounded"
        className="rounded-full"
        width={743}
        height={59}
      />
      <div className="flex gap-2 items-center">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width={123} height={13} />
      </div>
    </div>
  );
};

export default SeachNavLoading;

import React, { useContext } from 'react'
import Base from './Base';
import click_image from "../assets/click_image.png";
import { MainContext } from './Context';
import Showcase from './Showcase';
import { cn } from '../lib/utils';

const SideView = () => {
  const {page} = useContext(MainContext)
  const bool = page ==="ZONE"
  return (
    <div className="flex flex-col justify-between">
      <div
        className={cn(
          "flex justify-center items-center mx-auto w-full  lg:max-w-[318.689px] min-h-[172px] rounded-lg bg-white border-[1.77px] border-[#B7E0FF]"
          ,bool?"p-6":"p-3"
        )}
      >
        {bool ? <Base /> : <Showcase flag/>}
      </div>
      <div className="flex flex-col mb-9 mt-9 mx-auto">
        <img src={click_image} className="w-[343px] h-[172px]" alt="" />
        <p className="text-[#727272] text-base text-center">
          “Click” to zoom in the box.
        </p>
      </div>
    </div>
  );
}

export default SideView
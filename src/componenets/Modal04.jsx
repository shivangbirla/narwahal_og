import React from "react";
import { cn } from "../lib/utils";

const Modal04 = ({ children, isOpen, setIsOpen, classes }) => {
  return (
    <div
      className={cn(
        "fixed overflow-hidden z-30 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out",
        isOpen
          ? "transition-opacity opacity-100 duration-500 translate-y-0 translate-x-0"
          : "translate-full delay-400 opacity-0 -translate-y-full -translate-x-full"
        // ,classes
      )}
    >
      <div
        className={cn(
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit absolute bg-white md:w-1/2 w-[40%] max-h-screen-[10%] overflow-y-auto shadow-xl delay-400 duration-500 ease-in-out transition-all transform rounded-2xl p-7",
          classes
        )}
      >
        {children}
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          console.log("second");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default Modal04;

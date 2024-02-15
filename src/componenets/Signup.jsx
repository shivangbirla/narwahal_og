import React, { useState } from "react";
import logo from "../assets/narwahal_logo_new.svg";
import signup from "../assets/signup-img.svg";
import hide from "../assets/hide-img.svg";

const Signup = () => {
  const [isHiden, setIsHiden] = useState(false);
  return (
    <div className="">
      <div className="flex min-h-screen flex-col items-center lg:flex-row bg-[#F8F9FA] justify-around md:justify-center py-24 xl:px-24 md:px-16 px-8 m:gap-24 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="narwhal-logo"
            className="h-[40px] w-[97px] absolute left-8 top-5"
          />
          <div className="flex flex-col md:gap-6 gap-3">
            <h1 className="text-3xl md:text-[60px] font-bold">Sign in to</h1>
            <h2 className="text-xl md:text-[40px] font-medium">Narwhal Project</h2>
            <img src={signup} alt="signup-img" className="w-[635px] h-auto" />
          </div>
        </div>
        <div className="flex    max-w-[600px]  w-full items-center justify-center">
          <div className="bg-white w-full flex flex-col md:px-[85px] md:py-[57px] md:gap-10 gap-5 p-8  rounded shadow-sm ">
            <h2 className="md:text-[35px] text-lg  font-medium font-sans  ">Sign In</h2>
            <div
              className="
              
              flex 
              justify-between
              w-full
              rounded-lg
              bg-[#E9F3FE]
            "
            >
              <input
                className=" 
                px-4
                py-3
                md:px-[35px] 
                md:py-[23px] 
                form-input 
                w-full 
                h-full 
                border-none 
                rounded-lg 
                placeholder-[#47AFFF] 
                text-[#47AFFF] 
                focus:outline-none 
                bg-inherit 
                text-lg focus:ring-2 
                focus:ring-inset
              focus:ring-sky-600
                hover:ring-2 
                hover:ring-inset
              hover:ring-sky-600 "
                type="text"
                id="emailOrUsername"
                placeholder="Enter email or username"
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <div
                className="
                relative 
                flex 
                justify-between 
                w-full 
                rounded-lg 
              bg-[#E9F3FE]
              
              "
              >
                <input
                  className="  
                  px-4
                  py-3
                  md:px-[35px] 
                  md:py-[23px]  
                  form-input 
                  w-full 
                  h-full border-none 
                  rounded-lg 
                  placeholder-[#47AFFF] 
                  text-[#47AFFF] 
                  focus:outline-none 
                  bg-inherit 
                  text-lg focus:ring-2 
                  focus:ring-sky-600
                  hover:ring-2 
                  hover:ring-inset
                  focus:ring-inset
                hover:ring-sky-600 
                  pr-[65px]
                "
                  type={isHiden ? "text" : "password"}
                  id="emailOrUsername"
                  placeholder="Enter email or username"
                />
                <img
                  src={hide}
                  alt="hide"
                  className="h-full w-[20px] absolute right-6 "
                  onClick={() => setIsHiden(!isHiden)}
                />
              </div>
              <div className="text-right ">
                <a
                  href="#"
                  className="text-[#B0B0B0] hover:underline text-[15px]"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button className="w-full bg-[#47AFFF] text-white font-semibold md:py-[20px] py-[10px] rounded-lg hover:bg-[#36a5f9] transition duration-300 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

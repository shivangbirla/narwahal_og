import React from "react";
import logo from "../assets/narwahal_logo_new.svg";
import signup from "../assets/signup-img.svg";
import hide from "../assets/hide-img.svg";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#F8F9FA] justify-around md:pr-16 sm:pr-0">
        <div>
          <img
            src={logo}
            alt="narwhal-logo"
            className="h-[40px] w-[80px] absolute left-8 top-5"
          />
          <div className="md:ml-[50px] mt-[150px]">
            <h1 className="text-[30px] font-bold">Sign in to</h1>
            <h2 className="text-[25px] font-semibold">Project Narwhal</h2>
            <img src={signup} alt="signup-img" className="w-[500px] h-auto" />
          </div>
        </div>
        <div className="flex min-h-screen items-center justify-center">
          <div className="bg-white p-8 rounded shadow-sm w-96">
            <h2 className="text-2xl font-semibold text-center mb-8">Sign In</h2>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg placeholder-[#47AFFF] focus:outline-none bg-[#E9F3FE]"
                type="text"
                id="emailOrUsername"
                placeholder="Enter email or username"
              />
            </div>

            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-2 border rounded-lg placeholder-[#47AFFF] focus:outline-none bg-[#E9F3FE]"
                type="password"
                id="password"
                placeholder="Password"
              />
              <img
                src={hide}
                alt="hide"
                className="h-4 w-4 absolute right-4 top-3.5"
              />
            </div>

            <div className="text-right mb-4">
              <a
                href="#"
                className="text-[#B0B0B0] hover:underline text-[14px]"
              >
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-[#47AFFF] text-white font-semibold py-2 rounded-lg hover:bg-[#36a5f9] transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

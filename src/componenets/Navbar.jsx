/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import question from "../assets/questionmark.png";
import hamburgeralt from "../assets/alternateHamburgerMenu.svg";
import questionWithOutline from "../assets/questionwithround.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.png";
import { MainContext } from "./Context";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../api/productRequest";

const Navbar = ({ searchValue, setSearchValue }) => {
  const [selectedArea, setSelectedArea] = useState("areaa");
  const { open, setOpen, page, setPage } = useContext(MainContext);
  const [search, setsearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  const handleAreaClick = (area) => {
    setSearchValue(area);
    setSelectedArea(area);
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleOutsideClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const getSearch = async () => {
      if (search === "") {
        setSearchResult([]);
        return;
      }
      try {
        const results = await searchProducts(search);
        if (results.status !== 200) {
          setSearchResult([
            {
              content: "Nothing found",
            },
          ]);
          return;
        }
        console.log(results.data);
        const arr = results.data.map((result) => {
          return {
            content: result.mach_desc + " " + result.maker_desc,
          };
        });
        setSearchResult(arr);
      } catch (error) {
        setSearchResult([
          {
            content: error.response.data.detail,
          },
        ]);
        return;
      }
    };
    getSearch();
  }, [search]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleBack = () => {
    if (page === "ZONE") {
      setPage("HOME");
    } else if (page === "PRODUCT") {
      setPage("ZONE");
    }
  };
  return (
    <div className="flex justify-between py-2 my-4 items-center">
      <div
        className=" lg:hidden w-[17px] h-full flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <svg
          className="w-full h-full my-auto"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      {page !== "HOME" && (
        <div onClick={handleBack}>
          <IoArrowBackCircleOutline className="w-[32px] h-[32px] cursor-pointer" />
        </div>
      )}

      <div className="relative flex ml-2  rounded-full bg py-2 px-5 bg-[#D8EEFF] w-[56%] justify-between items-center">
        <img src={question} alt="" className="w-[17px] h-[17px]" />
        <input
          type="text"
          style={{
            padding: "0.5rem",
            backgroundColor: "inherit",
            width: "100%",
            border: "none",
            outline: "none",
            borderBottom: "none",
            boxShadow: "none",
          }}
          placeholder="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <img src={hamburgeralt} alt="" />

        {searchResult.length > 0 && (
          <div className="absolute bg-white p-3 w-11/12 min-h-[300px] max-h-[600px] rounded-lg shadow-lg overflow-y-scroll top-[115%] z-50 ">
            <div className="w-full h-full ">
              {searchResult.map((result, index) => (
                <div className="w-full h-12 flex items-center justify-between border-b border-gray-200">
                  <p className="text-xs font-normal">{result.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-xl">
          <img src={questionWithOutline} className="w-[24px] h-[24px]" alt="" />
        </div>
        <div className="relative">
          <button
            onClick={toggleDialog}
            disabled={isDialogOpen}
            className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-xl"
          >
            <img src={bell} className="w-[24px] h-[24px]" alt="" />
          </button>
          {isDialogOpen && (
            <div
              ref={dialogRef}
              className="absolute top-14 -left-[50%] z-50 bg-white p-4 shadow-lg border  rounded-2xl border-gray-300"
            >
              {/* Your dialog content goes here */}

              <div>This is the dialog content</div>
            </div>
          )}
          {isDialogOpen && (
            <div className="absolute -top-[10] left-[25%] w-[0] h-[0] border-solid border-transparent border-[13.9615px] border-b-[15px] border-t-0 border-r-[13.9615px] border-l-[13.9615px] border-b-solid border-b-gray-300 shadow-lg"></div>
          )}
        </div>

        <img src={avatar} alt="" />

        <p className="text-lg font-normal hidden md:block">Himanshu Tiwari</p>
      </div>
    </div>
  );
};

export default Navbar;

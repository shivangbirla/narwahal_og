import { TramSharp } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import rack_png from "../assets/rack_image_1.png";
import { cn } from "../lib/utils";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";
import { useNavigate } from "react-router-dom";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as DropDownIcon } from "../assets/expand_more.svg";
import button_img from "../assets/button.png";
import { ReactComponent as DropDownIconb } from "../assets/expand_moreb.svg";
import search from "../assets/search.png";

const Home = ({ setIsHome, isHome }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(0);
  const [isComponentOpen, setIsComponentOpen] = useState(false);
  const [setInverntory, setSetInverntory] = useState();
  const [rack, setRack] = useState();
  const [shelve, setShelve] = useState();

  console.log("hello", setInverntory, rack, shelve);

  const handleOpen = (inventory) => {
    setIsOpen(true);
    setSetInverntory(inventory);
  };

  const closeComponent = () => {
    setIsComponentOpen(false);
  };

  const tabs = [
    {
      content: "2nd Floor",
      icon: <Floor1 onClick={handleOpen} />,
    },
    {
      content: "3rd Floor",
      icon: <Floor2 onClick={handleOpen} />,
    },
    {
      content: "Bonus Store",
      icon: <Floor3 onClick={handleOpen} />,
    },
  ];

  const handleShelveClick = (e, rack) => {
    const shelve = parseInt(e.target.textContent.split(" ")[1]);
    setIsOpen(false);
    setRack(rack);
    setShelve(shelve);
    setIsComponentOpen(true);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      content: "none", 
    },
  }));
  const buttons = [
    {
      content: "Floor View",
      onClick: () => {
        setIsHome(true);
      },
    },
    {
      content: "List View",
      onClick: () => {
        setIsHome(false);
      },
    },
  ];

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<DropDownIconb />} {...props} />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
      height: "16px", // Updated height to be 16px
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: 0,
  }));

  return (
    <div className="flex flex-col gap-[22px] h-fit ">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        classes={"h-[80vh]  flex items-start flex-col gap-8  justify-start  "}
      >
        <h1 className="text-center w-full text-2xl">Main Inventory</h1>
        <div className="flex flex-row w-full justify-around items-start">
          <div className="relative w-fit -rotate-90 mt-[36vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 11
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center "
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isComponentOpen} setIsOpen={closeComponent}>
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-lg">
              Rack-{rack} Shelve- {shelve ?? "none"}
            </h1>
            <div className="flex  justify-end gap-3">
              <div className="relative w-[300px] bg-gray-100">
                <img
                  src={search}
                  alt="Search"
                  className="absolute left-3 top-1/2  transform -translate-y-1/2 w-[24px] h-[24px] text-gray-400 "
                />
                <input
                  type="text"
                  placeholder={"Search"}
                  // value={value}
                  // onChange={onChange}
                  className="pl-9 pr-4 py-2 border h-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                />
              </div>
              <button className="bg-transparent !min-w-[214px] hover:bg-gray-100 border border-gray-400 rounded-lg">
                Stock Reconciliation
              </button>
            </div>
          </div>
          <div className="h-full w-full flex flex-col gap-6">
            <Accordion
              // expanded={expanded === "panel2"}
              defaultExpanded
              className="!rounded-lg !bg-gray-50"
              // onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="!bg-gray-50 !rounded-lg !py-4"
              >
                <div className="flex items-center">
                  <div className="">
                    <h1 className="text-[#252528] font-normal text-[24px] leading-normal tracking-tight font-dm-sans">
                      Main Engine (Hyundai Heavy Industry){" "}
                    </h1>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className="w-full overflow-scroll">
                <table className="min-w-full text-black shadow-sm">
                  <thead className="bg-[#F3F9FF]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Machinery Description{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Maker{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Material Description{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Condition
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Part No.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        ROB{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Package Qty.{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Track{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="pt-[10px] pb-[12px]">
                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                      <tr
                        key={index}
                        className={cn(
                          "bg-white text-[#535353]",
                          index === 3 && "bg-[#FFF7F2] text-[#E56108] "
                        )}
                        // onClick={openComponent01}
                      >
                        <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                          Machinery Description{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Maker
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Material Description{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Condition{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Part No.
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          ROB{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Package Qty.{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          <button
                            className="bg-[#47AFFF] text-[10px] px-2 py-[2px] my-auto text-white disabled:bg-slate-200 disabled:text-gray-400 disabled:border-gray-300 disabled:border cursor-pointer rounded-md"
                            disabled={index === 3}
                          >
                            Track{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="!rounded-lg !bg-gray-50"

              // expanded={expanded === "panel2"}
              // onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="!bg-gray-50 !rounded-lg !py-4"
              >
                <div className="flex items-center">
                  <div className="">
                    <h1 className="text-[#252528] font-normal text-[24px] leading-normal tracking-tight font-dm-sans">
                      LO Purifier (Samgong){" "}
                    </h1>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <table className="min-w-full text-black shadow-sm">
                  <thead className="bg-[#F3F9FF]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Machinery Description{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Maker{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Material Description{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Condition
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Part No.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        ROB{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Package Qty.{" "}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Track{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="pt-[10px] pb-[12px]">
                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                      <tr
                        key={index}
                        className={cn(
                          "bg-white text-[#535353]",
                          index === 3 && "bg-[#FFF7F2] text-[#E56108] "
                        )}
                        // onClick={openComponent01}
                      >
                        <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                          Machinery Description{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Maker
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Material Description{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Condition{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Part No.
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          ROB{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          Package Qty.{" "}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          <button
                            className="bg-[#47AFFF] text-sm p-1 text-white disabled:bg-slate-200 disabled:text-black cursor-pointer rounded-md"
                            disabled={index === 3}
                          >
                            Track{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </AccordionDetails>
            </Accordion>

            {/* Button to close the component */}
          </div>
        </div>
      </Modal>
      <h2 className="text-3xl font-medium ">Inventory</h2>

      <div className="flex flex-row gap-5 mb-[30px]">
        {buttons.map((button, index) => (
          <button
            className={cn(
              "px-[18px] py-[5px] border border-black rounded-lg",
              Number(!isHome) === index && "bg-[#E7F4FF] "
            )}
            onClick={button.onClick}
          >
            {button.content}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        <ul className="tabs group">
          {tabs.map((tab, index) => (
            <li
              className={cn(
                selectedView === index && "active"
              )}
              onClick={() => {
                setSelectedView(index);
              }}
            >
              <div>{tab.content}</div>
            </li>
          ))}
        </ul>
        <div
          ref={ref}
          className="w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1175px] box-border min-h-[600px] max-h-[765px] bg-white rounded-2xl rounded-tl-none p-6"
        >
          {/* <Floor1 onClick={handleOpen} /> */}
          {tabs[selectedView].icon}
        </div>
      </div>
    </div>
  );
};

export default Home;

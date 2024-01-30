import React, { useState } from "react";
import products from "../data/data_table";
import { cn } from "../lib/utils";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as DropDownIcon } from "../assets/expand_more.svg";
import button_img from "../assets/button.png";
import { ReactComponent as DropDownIconb } from "../assets/expand_moreb.svg";
import Modal01 from "./Modal01";
import Modal02 from "./Modal02";
import InputBox from "./InputBox";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    content: "none", // Updated to remove pseudo-element content
  },
}));

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

const Inventory_listview = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [selectedView, setSelectedView] = useState("List View");

  const tabs = [
    {
      content: "Check in Spares",
    },
    {
      content: "Check in New Spares",
    },
    {
      content: "Check in DryDock Spares",
    },
  ];

  const buttons = [
    {
      content: "Floor View",
    },
    {
      content: "List View",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // State to track whether the component is open or closed
  const [isComponentOpen, setIsComponentOpen] = useState(false);

  // Function to handle opening the component
  const openComponent = () => {
    setIsComponentOpen(true);
  };

  // Function to handle closing the component
  const closeComponent = () => {
    setIsComponentOpen(false);
  };

  // State to track whether the component is open or closed
  const [isComponent01Open, setIsComponent01Open] = useState(false);

  // Function to handle opening the component
  const openComponent01 = () => {
    setIsComponent01Open(true);
  };

  // Function to handle closing the component
  const closeComponent01 = () => {
    setIsComponent01Open(false);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col">
          <h2 className="text-[36px] font-medium mb-6">Inventory</h2>
          <div className="flex flex-row gap-5 mb-[30px]">
            {buttons.map((button) => (
              <button className="px-[18px] py-[7px] border border-black rounded-lg">
                {button.content}
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-[180px] h-[55px] bg-white justify-center items-center rounded-t-[19px] shadow-md border-t-2 border-r-2 border-l-2 border-gray-200">
          <span className="text-[19px] font-normal">List View</span>
        </div>
        {selectedView === "List View" && products && products.length > 0 && (
          <div className="p-[20px] bg-[#FFFFFF] rounded-2xl rounded-tl-none">
            <div className="border-[1px] border-gray-100 rounded-lg p-[20px] mb-[7px]">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <div className="flex w-full justify-between">
                    <div className="text-[#252528] text-[22px]">
                      Main Engine (Hyundai Heavy Industry)
                    </div>
                    <div className="mr-[20px]"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <img
                      src={button_img}
                      alt="add-button"
                      className="absolute w-[74px] h-[32px] right-[72px] top-[2px]"
                    />
                    <div className="p-[8px] shadow-sm bg-opacity-25 rounded-2xl">
                      <div className="h-fit rounded-2xl overflow-hidden">
                        <table className="min-w-full text-black shadow-sm">
                          <thead className="bg-[#F3F9FF]">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Manufacturer
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Machinery
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Part Desc.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Part No.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                ROB
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Quantity
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Scanned Qty.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            className="pt-[10px] pb-[12px]"
                            onClick={openComponent}
                          >
                            {products.map((product, index) => (
                              <tr
                                key={index}
                                className="bg-white text-[#535353]"
                              >
                                <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                                  {product.mach_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.maker_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.material}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.material_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.part_no}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.rob}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="border-[1px] border-gray-100 rounded-lg p-[20px]">
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <div className="flex w-full justify-between">
                    <div className="text-[#252528] text-[22px]">
                      Generator Engine (STX)
                    </div>
                    <div className="mr-[20px]"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <img
                      src={button_img}
                      alt="add-button"
                      className="absolute w-[74px] h-[32px] right-[72px] top-[2px]"
                    />
                    <div className="p-[8px] shadow-sm bg-opacity-25 rounded-2xl">
                      <div className="h-fit rounded-2xl overflow-hidden">
                        <table className="min-w-full text-black shadow-sm">
                          <thead className="bg-[#F3F9FF]">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Manufacturer
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Machinery
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Part Desc.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Part No.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                ROB
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Quantity
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Scanned Qty.
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            className="pt-[10px] pb-[12px]"
                            onClick={openComponent01}
                          >
                            {products.map((product, index) => (
                              <tr
                                key={index}
                                className="bg-white text-[#535353]"
                              >
                                <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                                  {product.mach_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.maker_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.material}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.material_desc}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.part_no}
                                </td>
                                <td className="px-[15px] py-[6px] whitespace-nowrap">
                                  {product.rob}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="mt-[12px] flex justify-end mr-4 gap-4">
              <button className="rounded-md border-black border px-4 py-[2px]">
                Cancel
              </button>
              <button className="rounded-md border-2 px-4 py-[2px] border-[#47AFFF] bg-[#47AFFF] text-white">
                Confirm
              </button>
            </div>
          </div>
        )}

        <Modal01 isOpen={isComponentOpen} setIsOpen={closeComponent}>
          <div className="h-full flex flex-col gap-6">
            <div className="flex items-center">
              <div className="">
                <h1 className="text-[#252528] font-normal text-[24px] leading-normal tracking-tight font-dm-sans">
                  Main Engine
                </h1>
              </div>
            </div>
            <table className="min-w-full text-black shadow-sm">
              <thead className="bg-[#F3F9FF]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Spare Parts
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Tag ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Condition
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Label
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px] pb-[12px]">
                {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                  <tr
                    key={index}
                    className="bg-white text-[#535353]"
                    onClick={openComponent01}
                  >
                    <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                      Lorem Ipsum
                    </td>
                    <td className="px-[15px] py-[6px] whitespace-nowrap">
                      Pic
                    </td>
                    <td className="px-[15px] py-[6px] whitespace-nowrap">
                      Interval
                    </td>
                    <td className="px-[15px] py-[6px] whitespace-nowrap">
                      Due Date
                    </td>
                    <td className="px-[15px] py-[6px] whitespace-nowrap">
                      Status
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Button to close the component */}
            <button className="self-end bg-[#47AFFF] text-white rounded-xl py-[6px] px-[24px] font-normal flex items-center justify-center">
              Save
            </button>
          </div>
        </Modal01>
        <Modal02 isOpen={isComponent01Open} setIsOpen={closeComponent01}>
          <div className="h-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <InputBox
                placeholder="Search parts"
                value={inputValue}
                onChange={handleChangeInput}
              />
              <button className="px-[18px] py-[7px] border border-black rounded-lg">
                Search
              </button>
            </div>
            <table className="min-w-full text-black shadow-sm">
              <thead className="bg-[#F3F9FF]">
                <tr>
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase w-[414px]">
                    Material Description
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase w-[322px]">
                    Part No.
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px] pb-[12px]">
                {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                  <tr key={index} className="bg-white text-[#535353]">
                    <td className="px-[15px] py-[6px] whitespace-nowrap px-auto text-center border-r">
                      Lorem Ipsum
                    </td>
                    <td className="px-[15px] py-[6px] whitespace-nowrap text-center">
                      Pic
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal02>
      </div>
    </>
  );
};

export default Inventory_listview;

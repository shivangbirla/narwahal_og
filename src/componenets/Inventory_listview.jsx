import React, { useEffect, useMemo, useState } from "react";
import products from "../data/data_table";
import { cn } from "../lib/utils";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { ReactComponent as DropDownIcon } from "../assets/expand_more.svg";
import { ReactComponent as DropDownIconb } from "../assets/expand_moreb.svg";

import Typography from "@mui/material/Typography";

import InputBox from "./InputBox";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  FormHelperText,
  Modal,
  Pagination,
  Select,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { BASE_URL } from "../lib/functions";
import axios from "axios";
import toast from "react-hot-toast";

const Inventory_listview = ({ setIsHome, isHome }) => {
  const floors = [1, 2, 3];
  const rooms = [1, 2, 3];
  const racks = [1, 2, 3];
  const shelves = [1, 2, 3];

  const [expanded, setExpanded] = React.useState("panel1");
  const [isopen, setIsopen] = useState(false);

  const [isComponent01Open, setIsComponent01Open] = useState(false);

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

  const [room, setRoom] = useState(null);
  const [rack, setRack] = useState(null);
  const [shelf, setShelf] = useState(null);

  const [availableMachines, setAvailableMachines] = useState(null);

  const search = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://159.89.204.17:81/inventory/fetch_boxes?room=${room}&rack=${rack}&shelf=${shelf}`
    );
    let data = await response.json();
    const arr = data
      .map((item) => {
        return {
          machine_name: item.machine_name,
          _id: item.id,
          pages: item.pages,
        };
      })
      .filter((item) => item._id);
    setAvailableMachines(arr);
  };

  const [openMachine, setOpenMachine] = useState(null);
  const [machineBoxes, setMachineBoxes] = useState(null);
  const [openPage, setOpenPage] = useState(0);

  const [selectedAccordian, setSelectedAccordian] = useState();

  const handleChangeAccordian = (panel) => {
    setSelectedAccordian(selectedAccordian === panel ? null : panel);
  };

  /*const fetchProducts = useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`${BASE_URL}/fetch_products?machine_name=${openMachine}&page_no=${openPage}`);
      const data = await response.json();
      setMachineBoxes(data);
    };
    fetchProductData();
  }, [openMachine, openPage]);*/

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

  const openComponent01 = () => {
    setIsComponent01Open(true);
  };

  // Function to handle closing the component
  const closeComponent01 = () => {
    setIsComponent01Open(false);
  };

  // State to track whether the component is open or closed

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium mb-[22px]">Inventory</h2>

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
        </div>
        <div className="flex">
          <ul className="tabs group">
            <li className={cn("active")}>
              <div>List View</div>
            </li>
          </ul>
        </div>
        {selectedView === "List View" && products && products.length > 0 && (
          <div className="p-[20px] bg-[#FFFFFF] rounded-2xl rounded-tl-none">
            <div className={"flex gap-x-3"}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label-room">Room</InputLabel>
                <Select
                  labelId="demo-simple-select-label-room"
                  id="demo-simple-select-room"
                  value={room}
                  label="Room"
                  onChange={(e) => {
                    setRoom(e.target.value);
                  }}
                >
                  {rooms.map((room) => (
                    <MenuItem value={room}>Room {room}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label-rack">Rack</InputLabel>
                <Select
                  labelId="demo-simple-select-label-rack"
                  id="demo-simple-select-rack"
                  value={rack}
                  label="Rack"
                  onChange={(e) => {
                    setRack(e.target.value);
                  }}
                >
                  {racks.map((rack) => (
                    <MenuItem value={rack}>Rack {rack}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label-shelf">
                  Shelf
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-shelf"
                  id="demo-simple-select-shelf"
                  value={shelf}
                  label="Shelf"
                  onChange={(e) => {
                    setShelf(e.target.value);
                  }}
                >
                  {shelves.map((shelf) => (
                    <MenuItem value={shelf}>Shelf {shelf}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant={"contained"} onClick={search}>
                Search
              </Button>
            </div>
            {availableMachines?.map((box) => (
              <AccordianComponent
                acc={box}
                selectedAccordian={selectedAccordian}
                handleChange={handleChangeAccordian}
              />
            ))}

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

        <Modal isOpen={isComponent01Open} setIsOpen={closeComponent01}>
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
        </Modal>

        <Modal
          open={isopen}
          onClose={() => setIsopen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7 rounded-lg">
            <h1 className="font-bold text-lg">Add product</h1>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name:</label>
                <input
                  className="border-none outline-none rounded-lg bg-gray-100"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  className="border-none outline-none rounded-lg bg-gray-100"
                  type="number"
                  id="quantity"
                  name="quantity"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="id">ID:</label>
                <input
                  className="border-none outline-none rounded-lg bg-gray-100"
                  type="text"
                  id="id"
                  name="id"
                />
              </div>
              <button
                // type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
              >
                Add
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Inventory_listview;

const AccordianComponent = ({ selectedAccordian, acc, handleChange }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [page, setpage] = useState(1);
  const handlePageChange = (event, value) => {
    setpage(value);
  };
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(
        `${BASE_URL}/inventory/fetch_products?page_no=${page - 1}&box_id=${
          acc._id
        }`
      );
      setData(resp.data);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedAccordian === acc._id) {
      setIsLoading(true);
      getProducts();
    }
  }, [selectedAccordian, page]);

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
    <Accordion
      expanded={!!selectedAccordian && selectedAccordian === acc._id}
      className="!rounded-lg !bg-gray-50 my-4"
      onChange={() => handleChange(acc._id)}
      key={acc._id}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        className="!bg-gray-50 !rounded-lg !py-4"
      >
        <div className="flex items-center">
          <div className="">
            <h1 className="text-[#252528] font-normal text-[24px] leading-normal tracking-tight font-dm-sans">
              {acc.machine_name}
            </h1>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="w-full overflow-scroll">
        <table className="min-w-full text-black shadow-sm">
          <thead className="bg-[#F3F9FF]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Material Code{" "}
              </th>
              {/* <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Maker{" "}
              </th> */}
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Material Description{" "}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Re-Condition
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Part No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                ROB{" "}
              </th>
              {/* <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Package Qty.{" "}
              </th> */}
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Track{" "}
              </th>
            </tr>
          </thead>
         
          <tbody className="pt-[10px] pb-[12px]">
            {data.map((da, index) => (
              <tr
                key={index}
                className={cn(
                  "bg-white text-[#535353]",
                  
                )}
                // onClick={openComponent01}
              >
                <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                  {da.material_code}{" "}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  {da.material_desc}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  {da.reconditioned}{" "}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  {da.part_no}{" "}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  {da.rob}
                </td>

                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  <button
                    className="bg-[#47AFFF] text-[10px] px-2 py-[2px] my-auto text-white disabled:bg-slate-200 disabled:text-gray-400 disabled:border-gray-300 disabled:border cursor-pointer rounded-md"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={acc.pages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          className="mx-auto flex items-center justify-center my-5"
        />
      </AccordionDetails>
    </Accordion>
  );
};

import { Pagination } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactComponent as DropDownIconb } from "../assets/expand_moreb.svg";
import search from "../assets/search.png";
import { BASE_URL } from "../lib/functions";
import { cn } from "../lib/utils";
import toast from "react-hot-toast";

const FloorData = ({ inventory, rack, shelve, isComponentOpen }) => {
  const [accordianData, setAccordianData] = useState([]);
  const [selectedAccordian, setSelectedAccordian] = useState();

  const handleChange = (panel) => {
    setSelectedAccordian(selectedAccordian === panel ? null : panel);
  };

  const getData = async () => {
    const resp = await axios.get(
      `${BASE_URL}/inventory/fetch_boxes?room=${inventory}&rack=${rack}&shelf=${shelve}`
    );
    const arr = resp.data
      .map((item) => {
        return {
          machine_name: item.machine_name,
          _id: item._id,
          pages: item.pages,
        };
      })
      .filter((item) => item._id);
    setAccordianData(arr);
  };

  useEffect(() => {
    if (!isComponentOpen) return;

    getData();
  }, [inventory, rack, shelve, isComponentOpen]);

  return (
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
        {accordianData.map((acc) => (
          <AccordianComponent
            handleChange={handleChange}
            selectedAccordian={selectedAccordian}
            acc={acc}
            key={acc._id}
          />
        ))}
      </div>
    </div>
  );
};

export default FloorData;

export const AccordianComponent = ({
  selectedAccordian,
  acc,
  handleChange,
}) => {
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
      className="!rounded-lg !bg-gray-50"
      onChange={() => handleChange(acc._id)}
      // key={acc._id}
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
            {data.map((_, index) => (
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
                <td className="px-[15px] py-[6px] whitespace-nowrap">Maker</td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  Material Description{" "}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  Condition{" "}
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">
                  Part No.
                </td>
                <td className="px-[15px] py-[6px] whitespace-nowrap">ROB </td>
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

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as DropDownIcon } from "../assets/expand_more.svg";
import axios from "axios";
import { BASE_URL } from "../lib/functions";
import toast from "react-hot-toast";

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
  <MuiAccordionSummary expandIcon={<DropDownIcon />} {...props} />
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

const Cin_table = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [selectedView, setSelectedView] = useState("Check in Spares");
  const [selectedValue, setSelectedValue] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const getData = async () => {
    try {
      const resp = await axios.get(
        `${BASE_URL}/checkin_checkout/get_products?page_no=${page}`
      );
      setProducts(resp.data.products);
      setPage(resp.data.total_pages);
    } catch (error) {
      toast.error("Not Found")
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className="bg-[#F8F9FA] ">
        <h2 className="text-3xl font-medium mb-[22px]">Check In</h2>
        <div className="flex justify-between items-center">
          <ul className="tabs group">
            {tabs.map((tab, index) => (
              <li
                className={cn(selectedView === tab.content && "active")}
                onClick={() => {
                  setSelectedView(tab.content);
                }}
              >
                <div>{tab.content}</div>
              </li>
            ))}
          </ul>

          <div className="flex flex-row items-center mr-5">
            <label
              htmlFor="dropdown"
              className="text-[16px] mr-[10px] font-medium"
            >
              PO Status
            </label>
            <select
              id="dropdown"
              className="border border-gray-300 pr-12 py-[5px] rounded-md focus:outline-none text-[#7D7D7D] text-[18px]"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Not Received</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        {selectedView === "Check in Spares" && products && (
          <div className="p-[24px] bg-[#FFFFFF] rounded-2xl rounded-tl-none">
            <div className="p-[8px] shadow-sm bg-opacity-25 rounded-2xl">
              <div className="h-fit rounded-2xl overflow-hidden">
                <table className="min-w-full text-black shadow-sm">
                  <thead className="bg-[#F3F9FF]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Machinery
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Manufacturer
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Part Description
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Part No.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Scanned Qty.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                       Checkout Qty.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Check in
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="pt-[10px] pb-[12px]">
                    {products.map((product, index) => (
                      <TableComponent product={product} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
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
        {selectedView === "Check in New Spares" &&
          products &&
          products.length > 0 && (
            <div className="p-[24px] bg-[#FFFFFF] rounded-2xl rounded-tl-none">
              <div className="border-[1px] border-gray-100 rounded-lg p-[20px]">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <div className="text-gray-800 text-[20px]">
                      PO No. 00000000000
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
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
                            <tbody className="pt-[10px] pb-[12px]">
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
      </div>
    </>
  );
};

export default Cin_table;

 const TableComponent= ({ product })=> {
  const [quantity, setQuantity] = useState(0);

  const onClick = async () => {
    if (quantity <= 0) {
      toast.error("Quantity should be greater than 0");
      return;
    }

    const resp = await axios.post(
      `${BASE_URL}/checkin_checkout/check_in?material_code=${product.material_code}&check_in_quantity=${quantity}`,
      {}
    );
    console.log(resp)
    toast.success("Checked in successfully");
  };

  return (
    <tr className="bg-white text-[#535353]">
      <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
        {product.material_code}
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        {product.maker_desc}
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        {product.material_desc}
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        {product.part_no}
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">{"--"}</td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        {product.checked_out}
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        <input
          type="number"
          className="w-14 p-1 rounded-lg bg-slate-100 border-none outline-none ring-transparent"
          value={quantity}
          onChange={(e) => {
            if (parseInt(e.target.value) >= 0) {
              setQuantity(parseInt(e.target.value));
            }
          }}
        />
      </td>
      <td className="px-[15px] py-[6px] whitespace-nowrap">
        <button
          className="bg-[#47AFFF] text-[12px] px-2 py-1 my-auto hover:bg-sky-600 text-white disabled:bg-slate-200 disabled:text-gray-400 disabled:border-gray-300 disabled:border cursor-pointer rounded-md"
          onClick={onClick}
        >
          CheckIn
        </button>
      </td>
    </tr>
  );
}

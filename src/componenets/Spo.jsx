import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import touch from "../assets/touch_app.svg";
import products from "../data/data_table";
import Modal from "./Modal";
import { Pagination } from "@mui/material";
import { BASE_URL } from "../lib/functions";

const Spo = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isComponentOpen, setIsComponentOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [pages, setPages] = useState(1);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // State to track whether the component is open or closed

  // Function to handle opening the component
  const openComponent = () => {
    setIsComponentOpen(true);
  };

  // Function to handle closing the component
  const closeComponent = () => {
    setIsComponentOpen(false);
  };

  const [page, setpage] = useState(1);
  const handlePageChange = (event, value) => {
    setpage(value);
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const effect = async () => {
      const resp = await fetch(`${BASE_URL}/spo/products?page_no=${page - 1}`);
      const data = await resp.json();
      console.log(data);
      setProducts(data.products);
      setPages(data.total_pages);
      setLoading(false);
    };
    setLoading(true);
    effect();
  }, [page]);

  return (
    <div className="flex flex-col gap-[22px] h-full">
      <div className="bg-[#F8F9FA]">
        <div className="w-full bg-white flex flex-col gap-8 p-7 rounded-xl">
          {/* <h1 className="text-black font-medium font-dm-sans text-[28px] leading-normal">
            Separate Parts Order
          </h1> */}

          <div className="rounded-xl px-3 py-2 text-black flex gap-2 bg-[#E7F4FF]">
            <img src={touch} alt="" className="w-[24px] h-[24px]" />
            <p className="text-black text-xs my-auto">
              Select the below given timelines to get the data related to that
              time period.
            </p>
          </div>
          <div className="flex flex-row gap-5 ">
            <button className="px-[18px] py-[7px] border border-black rounded-lg">
              Monthly
            </button>
            <button className="px-[18px] py-[7px] border border-black rounded-lg">
              Quarterly
            </button>
            <button className="px-[18px] py-[7px] border border-black rounded-lg">
              Annually
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 bg-white rounded-2xl">
        <div className="">
          <div className="p-[8px] shadow-sm bg-opacity-25 rounded-2xl">
            <div className="h-fit rounded-t-2xl overflow-x-scroll">
              <table className="min-w-full text-black shadow-sm">
                <thead className="bg-[#F3F9FF]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Material Code
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase whitespace-nowrap">
                      Maker Desc.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Material Desc.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Part No.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Consumption
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Safety Stock
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                      Demand
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
                      onClick={openComponent}
                    >
                      <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                        {product.material_code}
                      </td>
                      <td className="px-[15px] py-[6px] whitespace-nowrap line-clamp-1 max-w-[200px]">
                        {product.maker_desc}
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
                      <td className="px-[15px] py-[6px] whitespace-nowrap">
                        {product.consumed}
                      </td>
                      <td className="px-[15px] py-[6px] whitespace-nowrap">
                        4
                      </td>
                      <td className="px-[15px] py-[6px] whitespace-nowrap">
                        ----
                      </td>
                      <td
                        className={cn(
                          "px-4 py-2 whitespace-nowrap capitalize text-center"
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-lg text-white text-sm  ring-1 px-2 w-5/6",
                            product.status === "ok"
                              ? "bg-emerald-400/80 hover:bg-emerald-500 ring-emerald-700"
                              : product.status === "critical"
                              ? "bg-orange-300/80 hover:bg-orange-500  ring-orange-700"
                              : ""
                          )}
                        >
                          {product.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                count={pages}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                className="mx-auto flex items-center justify-center my-5"
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isComponentOpen}
        setIsOpen={closeComponent}
        classes={"!w-[500px] !p-6"}
      >
        <div className="w-full h-fit flex flex-col gap-8">
          <h1 className="text-black font-medium font-dm-sans text-[28px] leading-normal">
            Order
          </h1>

          <div className="flex flex-col gap-3   mx-auto ">
            <div className="flex flex-row gap-3 ">
              <h2 className="text-black  font-normal my-auto text-[20px] leading-normal">
                Quantity
              </h2>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="flex w-[255.919px] h-12 justify-center items-center flex-shrink-0 outline-none ring-none rounded-md border border-solid border-gray-300 px-4"
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(0, 0, 0, 0.20)",
                }}
              />
            </div>
            <div className="w-full flex justify-end gap-4">
              <button className="rounded-md border px-4 py-[2px] border-gray-300  text-gray-400">
                Back
              </button>
              <button className="rounded-md border px-4 py-[2px] border-[#47AFFF] bg-[#47AFFF] text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Spo;

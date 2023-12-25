import React, { useState } from "react";
import products from "../data/data_table";
import { cn } from "../lib/utils";

const Cin_table = () => {
  const [selectedView, setSelectedView] = useState("Check in Spares");

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

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="bg-[#F8F9FA]">
        <h2 className="text-[20px] font-medium mb-6">Check In</h2>
        <div className="flex justify-between items-center">
          <ul className="tabs group">
            {tabs.map((tab, index) => (
              <li
                className={cn(
                  // "w-1/2 bg-[#E8E8E8] py-3 px-11",
                  selectedView === tab.content && "active"
                )}
                onClick={() => {
                  setSelectedView(tab.content);
                }}
              >
                <div>{tab.content}</div>
              </li>
            ))}
          </ul>

          <div className="flex flex-row items-center mr-6">
            <label htmlFor="dropdown" className="text-[16px] font-medium mr-4">
              PO Status
            </label>
            <select
              id="dropdown"
              className="border border-gray-300 pr-12 py-2 rounded-md focus:outline-none"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Not Selected</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        {selectedView === "Check in Spares" &&
          products &&
          products.length > 0 && (
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
                          Maker
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
                          Check in
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                          Condition
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody className="pt-[10px] pb-[12px]">
                      {products.map((product, index) => (
                        <tr key={index} className="bg-white text-[#535353]">
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

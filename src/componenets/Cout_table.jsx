import React, { useState } from "react";
import products from "../data/data_table";
import { cn } from "../lib/utils";

const Cout_table = () => {
  const [selectedView, setSelectedView] = useState("List View");

  const tabs = [
    {
      content: "List View",
    },
    {
      content: "Board",
    },
  ];
  return (
    <>
      <div className="bg-[#F8F9FA] flex flex-col gap-[22px]">
        {/* <h2 className="text-3xl font-medium ">Check Out</h2> */}
        <div className="flex flex-col">
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
          {selectedView === "List View" && products && products.length > 0 && (
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
                          Condition
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                          Check Out
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
      </div>
    </>
  );
};

export default Cout_table;

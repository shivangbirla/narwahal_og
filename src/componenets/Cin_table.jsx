import React, { useState } from "react";
import products from "../data/data_table";
import { cn } from "../lib/utils";

const Cin_table = () => {
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
      <div className="bg-[#F8F9FA]">
        <h2 className="text-[22px] font-medium mb-4">Check In</h2>
        <div className="flex flex-row text-[18px] rounded-t-xl   font-medium bg-[#FFF] max-w-[352px] w-auto  border-solid border-b-0 border-gray-200 border-2 cursor-pointer">
          {tabs.map((tab, index) => (
            <div
              className={cn(
                "w-1/2 bg-[#E8E8E8] py-3 px-11",
                selectedView === tab.content && "bg-white !rounded-t-xl "
              )}
              onClick={() => {
                setSelectedView(tab.content);
              }}
            >
              {tab.content}
            </div>
          ))}
        </div>
        {selectedView === "List View" && products && products.length > 0 && (
          <div className="h-fit rounded-2xl rounded-tl-none overflow-hidden">
            <table className="min-w-full bg-white text-black shadow-sm">
              <thead className="bg-[#dae9f4]">
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
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Condition
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="bg-white text-black">
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.mach_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.maker_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.material}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.material_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.part_no}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap ">
                      {product.rob}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-end mr-4 gap-4">
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

import React, { useState } from "react";
import products from "../data/data_table";

const Cin_table = () => {
  const [selectedView, setSelectedView] = useState("listview");

  const handleViewClick = (view) => {
    setSelectedView(view);
  };
  return (
    <>
      <div className="bg-[#F8F9FA]">
        <h2 className="text-[22px] font-medium mb-4">Check In</h2>
        <div className="flex flex-row text-[18px] font-medium bg-[#FFF] max-w-[300px] w-auto border-solid border-b-0 border-gray-200 border-2 rounded-tl-md rounded-tr-md p-1 cursor-pointer">
          <div
            onClick={() => handleViewClick("listview")}
            className="mr-12 ml-8"
          >
            List View
          </div>
          <div onClick={() => handleViewClick("board")} className="">
            Board
          </div>
        </div>
        {selectedView === "listview" && products && products.length > 0 && (
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
              <button className="rounded-md border-black border-2 px-4 py-[2px]">
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

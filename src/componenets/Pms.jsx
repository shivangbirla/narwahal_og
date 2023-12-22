import React, { useState } from "react";
import { cn } from "../lib/utils";
import touch from "../assets/touch_app.svg";
import products from "../data/data_table";
import Modal from "./Modal";

const Pms = () => {
  const [selectedView, setSelectedView] = useState("Timeline");
  const [selectedValue, setSelectedValue] = useState("");

  const tabs = [
    {
      content: "Timeline",
    },
    {
      content: "Board",
    },
  ];

  const buttons = [
    {
      content: "Daily",
    },
    {
      content: "Weekly",
    },
    {
      content: "Monthly",
    },
  ];

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

  return (
    <div className="flex flex-col gap-[22px] h-full">
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-row text-[17px] font-medium bg-[#FFF] max-w-[352px] w-auto cursor-pointer rounded-t-2xl">
          {tabs.map((tab, index) => (
            <div
              className={cn(
                "w-1/2 bg-[#E8E8E8] py-3 px-11",
                selectedView === tab.content && "bg-white"
              )}
              onClick={() => {
                setSelectedView(tab.content);
              }}
            >
              {tab.content}
            </div>
          ))}
        </div>
        <div className="w-full bg-white flex flex-col gap-8 p-7 rounded-xl rounded-tl-none">
          <div className="rounded-xl px-3 py-2 text-black flex gap-2 bg-[#E7F4FF]">
            <img src={touch} alt="" className="w-[24px] h-[24px]" />
            <p className="text-black text-xs my-auto">
              Select the below given timelines to get the data related to that
              time period.
            </p>
          </div>

          <div className="flex flex-row gap-5 ">
            {buttons.map((button) => (
              <button className="px-[18px] py-[7px] border border-black rounded-lg">
                {button.content}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[23px] pl-[36px] pr-[57px] flex flex-col gap-5 bg-white rounded-2xl">
        <div className="flex justify-between">
          <h1 className="text-black text-lg my-auto">PMS- Lorem Ipsum</h1>
          <div className="flex flex-row items-center mr-6">
            <label htmlFor="dropdown" className="text-[16px] font-medium mr-4">
              Status
            </label>
            <select
              id="dropdown"
              className="border border-gray-300 pr-12 py-2 rounded-md focus:outline-none"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="option1">In Progress</option>
              <option value="option2">Completed</option>
              <option value="option3">Planning</option>
            </select>
          </div>
        </div>

        {selectedView === "Timeline" && (
          <div className="">
            <div className="p-[8px] shadow-sm bg-opacity-25 rounded-2xl">
              <div className="h-fit rounded-t-2xl overflow-hidden">
                <table className="min-w-full text-black shadow-sm">
                  <thead className="bg-[#F3F9FF]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Maintenance Job
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        PIC
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Interval
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Due Date
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="pt-[10px] pb-[12px]">
                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                      <tr
                        key={index}
                        className="bg-white text-[#535353]"
                        onClick={openComponent}
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

      <Modal isOpen={isComponentOpen} setIsOpen={closeComponent}>
        <div className=" w-full h-full">
          <div className="flex items-center">
            <div className="flex gap-5">
              <h1>PMS Job Description</h1>
              <div className="flex flex-row gap-3">
                <button className="px-[18px] py-[7px] border border-black rounded-lg">
                  Instructions
                </button>
                <button className="px-[18px] py-[7px] border border-black rounded-lg">
                  Drawings
                </button>
              </div>
            </div>
          </div>
          <table className="min-w-full text-black shadow-sm">
            <thead className="bg-[#F3F9FF]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Maintenance Job
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  PIC
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Interval
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Due Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="pt-[10px] pb-[12px]">
              {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <tr
                  key={index}
                  className="bg-white text-[#535353]"
                  onClick={openComponent}
                >
                  <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                    Lorem Ipsum
                  </td>
                  <td className="px-[15px] py-[6px] whitespace-nowrap">Pic</td>
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
          <button className="mt-4" onClick={closeComponent}>
            Close Component
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Pms;

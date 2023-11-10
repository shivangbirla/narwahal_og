import React, { useState } from "react";
import { cn } from "../lib/utils";
import touch from "../assets/touch_app.svg";

const Pms = () => {
  const [selectedView, setSelectedView] = useState("Timeline");

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
  return (
    <div className="flex flex-col gap-[26px] mt-[83px] h-full">
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-row text-[18px] font-medium bg-[#FFF] max-w-[352px] w-auto cursor-pointer rounded-t-2xl">
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
          <div className="flex gap-3">
            <h1 className="text-lg text-black">
              Status
            </h1>

            <select name="" id="" className="outline-none ">
              <option value="text-green-500">In Progress</option>
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
                    {[1,2 ,3 ,4 ].map((_, index) => (
                      <tr key={index} className="bg-white text-[#535353]">
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
    </div>
  );
};

export default Pms;

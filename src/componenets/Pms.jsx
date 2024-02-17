import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import touch from "../assets/touch_app.svg";
import Modal from "./Modal";

import { BASE_URL } from "../lib/functions";

import ShowcaseLoading from "./loading/ShowcaseLoading";
import { Pagination } from "@mui/material";

const Pms = () => {
  const [selectedView, setSelectedView] = useState("Timeline");
  const [selectedValue, setSelectedValue] = useState("completed");
  const [selectedButton, setSelectedButton] = useState("week");
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(1);
  const [picValue, setPicValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [noPages, setNoPages] = useState(0);
  const [selectedPms, setSelectedPms] = useState(null);
  const [modalPage, setModalPage] = useState(1);
  const [modalTotalPages, setModalTotalPages] = useState(1);
  const [modalData, setModalData] = useState(null);

  const handlePageChange = (event, value) => {
    setModalPage(value);
  };

  const fetchOptions = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/pms/get_jobs?status=${selectedValue}&due_within=${selectedButton}&page_no=${
          modalPage - 1
        }`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.result.length > 0) {
          setOptions(data.result);
          setNoPages(data.pages);
        }
      } else {
        throw new Error(`Error: ${await response.text()}`);
      }
    } catch (error) {
      console.error("Error fetching options:", error.message);
    } finally {
      // Clear loading state regardless of success or failure
      setLoading(false);
    }
  };

  const updateOptions = async (pmsCode, status) => {
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        mode: "cors",
      };

      const response = await fetch(
        `${BASE_URL}/pms/jobs/${pmsCode}/change_status?status=${status}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.result);
        console.log("Updated");
        // Handle the updated data as needed
      } else {
        throw new Error(`Error: ${await response.text()}`);
      }
    } catch (error) {
      console.error("Error updating options:", error.message);
    }
  };

  const updatePic = async (pmsCode, pic) => {
    try {
      const response = await fetch(
        `${BASE_URL}/pmsjobs/{pms_code)/change_pic/?pms_code=${pmsCode}&pic=${pic}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("PIC Updated!");
      } else {
        throw new Error(`Error: ${await response.text()}`);
      }
    } catch (error) {
      console.error("Error fetching options:", error.message);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, [selectedButton, selectedValue, modalPage]);

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
      value: "today",
    },
    {
      content: "Weekly",
      value: "week",
    },
    {
      content: "Monthly",
      value: "month",
    },
  ];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [isComponentOpen, setIsComponentOpen] = useState(false);

  const openComponent = (pms_code) => {
    setIsComponentOpen(true);
    setSelectedPms(pms_code)
  };

  const closeComponent = () => {
    setIsComponentOpen(false);
  };
  const [isComponent01Open, setIsComponent01Open] = useState(false);

  const openComponent01 = () => {
    setIsComponent01Open(true);
  };

  const closeComponent01 = () => {
    setIsComponent01Open(false);
  };

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/pmsjobs/0EF000.00028/fetch_products?page_no=${modalPage - 1}`)
        const data = await response.json();
        setModalTotalPages(data.pages);
        setModalData(data.products);
    }
    fetchData();
  }, [selectedPms, modalPage]);

  return (
    <>
      {loading ? (
        <ShowcaseLoading />
      ) : (
        <div className="flex flex-col gap-[22px] h-full">
          <div className="bg-[#F8F9FA]">
            <ul className="tabs group">
              {tabs?.map((tab, index) => (
                <li
                  className={cn(
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
            <div className="w-full bg-white flex flex-col gap-8 p-7 rounded-xl rounded-tl-none">
              <div className="rounded-xl px-3 py-2 text-black flex gap-2 bg-[#E7F4FF]">
                <img src={touch} alt="" className="w-[24px] h-[24px]" />
                <p className="text-black text-xs my-auto">
                  Select the below given timelines to get the data related to
                  that time period.
                </p>
              </div>

              <div className="flex flex-row gap-5">
                {buttons?.map((button) => (
                  <button
                    className={`px-[18px] py-[4.5px] border rounded-lg ${
                      selectedButton === button.value
                        ? "bg-[#E7F4FF] border-black"
                        : "border-black"
                    }`}
                    onClick={() => setSelectedButton(button.value)}
                  >
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
                <label
                  htmlFor="dropdown"
                  className="text-[16px] font-medium mr-4"
                >
                  Status
                </label>
                <select
                  id="dropdown"
                  className="border border-gray-300 pr-12 py-2 rounded-md focus:outline-none"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="planning">Planning</option>
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
                          <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                            Desc
                          </th>
                        </tr>
                      </thead>
                      <tbody className="pt-[10px] pb-[12px]">
                        {options?.map((option, index) => (
                          <tr key={index} className="bg-white text-[#535353]">
                            <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                              {option.pms_desc}
                            </td>
                            <td
                              className="px-[15px] py-[6px] whitespace-nowrap cursor-pointer"
                              onClick={() => {
                                openComponent01();
                                setIndex(index);
                              }}
                            >
                              {option.pic}
                            </td>
                            <td className="px-[15px] py-[6px] whitespace-nowrap">
                              {selectedButton}
                            </td>
                            <td className="px-[15px] py-[6px] whitespace-nowrap">
                              {option.due_date?.toString().slice(0, 10)}
                            </td>
                            <td className="px-[15px] py-[6px] whitespace-nowrap">
                              {selectedValue}
                            </td>
                            <td
                              className="px-[15px] py-[6px] whitespace-nowrap"
                            >
                              <button
                                  className="rounded-md px-3 py-[1px] bg-[#47AFFF] text-white hover:bg-blue-500"
                                  onClick={() => {
                                    openComponent(option.pms_code);
                                    setIndex(index);
                                  }}
                              >
                                show
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {noPages ? (
                      <Pagination
                        count={noPages}
                        page={modalPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        className="mx-auto flex items-center justify-center my-5"
                        color="primary"
                      />
                    ):<div className="w-full my-4 text-lg text-gray-400 font-semibold text-center">
                      No Data Found
                      </div>}
                  </div>
                </div>
                <div className="mt-[12px] flex justify-end mr-4 gap-4">
                  <button className="rounded-md border-black border px-4 py-[2px]">
                    Cancel
                  </button>
                  <button className="rounded-md px-4 py-1 bg-[#47AFFF] text-white hover:bg-blue-500">
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
          <Modal isOpen={isComponentOpen} setIsOpen={closeComponent}>
            <div className="w-full h-[550px] flex flex-col gap-6">
              <div className="flex items-center">
                <div className="flex gap-5 w-full justify-between">
                  <h1 className="my-auto text-black  font-sans font-medium text-lg leading-normal tracking-tighter">
                    PMS Job Description
                  </h1>
                  <div className="flex flex-row gap-3">
                    <button className="px-[18px] py-[7px] border border-gray-300 rounded-lg">
                      Instructions
                    </button>
                    <button className="px-[18px] py-[7px] border border-gray-300 rounded-lg">
                      Drawings
                    </button>
                  </div>
                </div>
              </div>
              <table className="min-w-full text-black shadow-sm">
                <thead className="bg-[#F3F9FF]">
                  <tr>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Part Description
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Part No.
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Working & Replace
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Location
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Used
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Remanining Qty.
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Condition
                    </th>
                    <th className="px-[15px] py-[6px] text-left text-sm font-semibold uppercase">
                      Detection
                    </th>
                  </tr>
                </thead>
                {selectedValue === "completed" ? (

                  <tbody className="pt-[10px] pb-[12px]">
                    {modalData?.map((opt, i) => (
                      <tr key={i} className="bg-white text-[#535353]">
                        <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                          {opt.material_desc}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.part_no}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.rob}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.work}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          LOCATION
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          USED
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.scanned_quantity}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.reconditioned}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          DETECTION
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody className="pt-[10px] pb-[12px]">
                    {modalData?.products?.map((opt, i) => (
                      <tr key={i} className="bg-white text-[#535353]">
                        <td className="px-[15px] py-[6px] whitespace-nowrap px-auto">
                          {opt.material_desc}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.part_no}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.rob}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.work}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          LOCATION
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          USED
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.scanned_quantity}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          {opt.reconditioned}
                        </td>
                        <td className="px-[15px] py-[6px] whitespace-nowrap">
                          DETECTION
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
              <Pagination
                  count={modalTotalPages}
                  page={modalPage}
                  onChange={setModalPage}
                  variant="outlined"
                  shape="rounded"
                  className="mx-auto flex items-center justify-center my-5"
              />
              

              {selectedValue === "in_progress" && (
                <div className="mt-[12px] flex justify-end mr-4 gap-4">
                  <button
                    className="rounded-md border-black border px-4 py-[2px]"
                    onClick={closeComponent}
                  >
                    Close
                  </button>
                  <button
                    className="self-end bg-[#47AFFF] hover:bg-blue-500 text-white rounded-md px-[24px] py-[8px]"
                    onClick={() =>
                      updateOptions(options[index]?.pms_code, "completed")
                    }
                  >
                    Complete
                  </button>
                </div>
              )}
              {selectedValue === "planning" && (
                <div className="mt-[12px] flex justify-end mr-4 gap-4">
                  <button
                    className="rounded-md border-black border px-4 py-[2px]"
                    onClick={closeComponent}
                  >
                    Close
                  </button>
                  <button
                    className="self-end bg-[#47AFFF] hover:bg-blue-500 text-white rounded-md px-[24px] py-[8px]"
                    onClick={() =>
                      updateOptions(options[index]?.pms_code, "in_progress")
                    }
                  >
                    Check-Out & Start
                  </button>
                </div>
              )}
              {selectedValue === "completed" && (
                <div className="mt-[12px] flex justify-end mr-4">
                  <button
                    className="rounded-md border-black border px-4 py-[2px]"
                    onClick={closeComponent}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </Modal>

          <Modal isOpen={isComponent01Open} setIsOpen={closeComponent01}>
            <h3 className="text-md font-semibold uppercase mb-1">
              Update the PIC
            </h3>
            <div className="flex justify-between">
              <input
                type="text"
                value={picValue}
                onChange={(e) => setPicValue(e.target.value)}
                className="border-2 border-black rounded-md px-4 py-2 min-w-[80%]"
              />
              <button
                onClick={() => updatePic(options[index]?.pms_code, picValue)}
                className="rounded-md border-2 px-1 py-[2px] border-[#47AFFF] bg-[#47AFFF] text-white"
              >
                Confirm
              </button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Pms;

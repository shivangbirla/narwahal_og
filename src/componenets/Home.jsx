import { TramSharp } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import rack_png from "../assets/rack_image_1.png";
import { cn } from "../lib/utils";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";
import { useNavigate } from "react-router-dom";

const Home = ({setIsHome}) => {
  const ref = useRef();
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(0);

    const handleOpen = () => {
      setIsOpen(true);

    };

  const tabs = [
    {
      content: "2nd Floor",
      icon: <Floor1 onClick={handleOpen} />,
    },
    {
      content: "3rd Floor",
      icon: <Floor2 onClick={handleOpen} />,
    },
    {
      content: "Bonus Store",
      icon: <Floor3 onClick={handleOpen} />,
    },
  ];

  const handleShelveClick = ()=>{
    setIsOpen(false)
    setIsHome(false)
  }



 
  return (
    <div className="flex flex-col gap-[22px] h-fit ">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        classes={"h-[80vh]  flex items-start flex-col gap-8  justify-start  "}
      >
        {/* rotate-90 mt-[6vh] */}
        <h1 className="text-center w-full text-2xl">Main Inventory</h1>
        <div className="flex flex-row w-full justify-around items-start">
          <div className="relative w-fit -rotate-90 mt-[36vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={handleShelveClick}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={handleShelveClick}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={handleShelveClick}
              >
                Shelve 11
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={handleShelveClick}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={handleShelveClick}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center "
                onClick={handleShelveClick}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={handleShelveClick}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <h2 className="text-3xl font-medium ">Inventory</h2>
      <div className="flex flex-col">
        <ul className="tabs group">
          {tabs.map((tab, index) => (
            <li
              className={cn(
                // "w-1/2 bg-[#E8E8E8] py-3 px-11",
                selectedView === index && "active"
              )}
              onClick={() => {
                setSelectedView(index);
              }}
            >
              <div>{tab.content}</div>
            </li>
          ))}
        </ul>
        <div
          ref={ref}
          className="w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1175px] box-border min-h-[600px] max-h-[765px] bg-white rounded-2xl rounded-tl-none p-6"
        >
          {/* <Floor1 onClick={handleOpen} /> */}
          {tabs[selectedView].icon}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useRef, useState } from "react";
import rack_png from "../assets/rack_image_1.png";
import { cn } from "../lib/utils";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";
import Modal from "./Modal";
import FloorData from "./FloorData";

const Home = ({ setIsHome, isHome }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(0);
  const [isComponentOpen, setIsComponentOpen] = useState(false);
  const [setInverntory, setSetInverntory] = useState();
  const [rack, setRack] = useState();
  const [shelve, setShelve] = useState();

  const handleOpen = (inventory) => {
    setIsOpen(true);
    setSetInverntory(inventory);
  };

  const closeComponent = () => {
    setIsComponentOpen(false);
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

  const handleShelveClick = (e, rack) => {
    const shelve = parseInt(e.target.textContent.split(" ")[1]);
    setIsOpen(false);
    setRack(rack);
    setShelve(shelve);
    setIsComponentOpen(true);
  };

  const buttons = [
    {
      content: "Floor View",
      onClick: () => {
        setIsHome(true);
      },
    },
    {
      content: "List View",
      onClick: () => {
        setIsHome(false);
      },
    },
  ];

  return (
    <div className="flex flex-col gap-[22px] h-fit ">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        classes={"h-[80vh]  flex items-start flex-col gap-8  justify-start  "}
      >
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
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 1)}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 1)}
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
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 2)}
              >
                Shelve 11
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 2)}
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
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 1
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 2
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 3
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 4
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 5
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 6
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 7
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 8
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 9
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center flex justify-center items-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 10
              </div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center "
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 11{" "}
              </div>
              <div
                className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-[5px] cursor-pointer text-center"
                onClick={(e) => handleShelveClick(e, 3)}
              >
                Shelve 12{" "}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isComponentOpen}
        setIsOpen={closeComponent}
        classes={"max-h-[80%] overflow-y-scroll"}
      >
        <FloorData
          isComponentOpen={isComponentOpen}
          inventory={setInverntory}
          shelve={shelve}
          rack={rack}
        />
      </Modal>
      {/* <h2 className="text-3xl font-medium ">Inventory</h2> */}

      {/* <div className="flex flex-row gap-5 mb-[30px]">
        {buttons.map((button, index) => (
          <button
            className={cn(
              "px-[18px] py-[5px] border border-black rounded-lg",
              Number(!isHome) === index && "bg-[#E7F4FF] "
            )}
            onClick={button.onClick}
          >
            {button.content}
          </button>
        ))}
      </div> */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <ul className="tabs group">
            {tabs.map((tab, index) => (
              <li
                className={cn(selectedView === index && "active")}
                onClick={() => {
                  setSelectedView(index);
                }}
              >
                <div>{tab.content}</div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-5 mr-20">
            {buttons.map((button, index) => (
              <button
                className={cn(
                  "px-[18px] py-[5px] border border-black rounded-lg",
                  Number(!isHome) === index && "bg-[#E7F4FF] "
                )}
                onClick={button.onClick}
              >
                {button.content}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={ref}
          className="w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1175px] box-border min-h-[600px] max-h-[765px] bg-white rounded-2xl rounded-tl-none p-6"
        >
          {tabs[selectedView].icon}
        </div>
      </div>
    </div>
  );
};

export default Home;

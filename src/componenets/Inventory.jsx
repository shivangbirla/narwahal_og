import React, { useContext, useState } from "react";
import Select from "./Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { MainContext } from "./Context";
const Inventory = ({ isZone = false }) => {
  const {
    selectedSide,
    setSelectedSide,
    area,
    setArea,
    deck,
    setDeck,
    zone,
    setZone,
  } = useContext(MainContext);
  console.log(deck, area);

  const deckotions = [
    {
      value: 1,
      label: "Deck 1",
    },
    {
      value: 2,
      label: "Deck 2",
    },
    {
      value: 3,
      label: "Deck 3",
    },
  ];
  const Areaotions = [
    {
      value: "A",
      label: "Area A",
    },
    {
      value: "B",
      label: "Area B",
    },
    {
      value: "D",
      label: "Area D",
    },
  ];
  const Zoneotions = [
    {
      value: 1,
      label: "Zone 1",
    },
    {
      value: 2,
      label: "Zone 2",
    },
    {
      value: 3,
      label: "Zone 3",
    },
  ];

  console.log(selectedSide);

  return (
    <div className="min-h-[238px]   max-w-[1213px] bg-white gap-9 p-7 flex flex-col rounded-2xl">
      <h1 className="text-3xl font-medium text-black "> Inventory</h1>
      <div className="bg-[#D8EEFF] rounded-lg p-3 gap-3 flex  items-center">
        <div className="bg-[#D9D9D9]  h-[30px] w-[30px] text-white text-xs overflow-hidden p-1 flex justify-center items-center  rounded-lg">
          LOGO
        </div>
        <p className="text-black text-base font-medium">
          Lorem ipsum is the dummy text which is used as description.{" "}
        </p>
      </div>
      <div className="flex gap-6">
        {isZone ? (
          <div className="flex gap-6">
            <button
              className={
                selectedSide === "FRONT"
                  ? "rounded-lg bg-[#C9E6FD] px-6 py-1.5 border border-black text-black"
                  : "rounded-lg bg-white border px-6 py-1.5  border-black text-black"
              }
              onClick={() => setSelectedSide("FRONT")}
            >
              FRONT
            </button>
            <button
              className={
                selectedSide === "BACK"
                  ? "rounded-lg bg-[#C9E6FD] px-6 py-1.5 border border-black text-black"
                  : "rounded-lg bg-white border px-6 py-1.5  border-black text-black"
              }
              onClick={() => setSelectedSide("BACK")}
            >
              BACK
            </button>
          </div>
        ) : (
          <div className="flex gap-6">
            <select value={deck} onChange={(e) => setDeck(e.target.value)}>
              <option > Select Deck</option>
              {deckotions.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            {/* <Select options={deckotions } label={"Deck"} value={deck} /> */}
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option > Select Area</option>
              {Areaotions.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;

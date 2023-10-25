import React, { useState } from 'react'
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const Inventory = () => {
  const [deck, setDeck] = useState(null)
  const [area , setArea] = useState(null)
  const [zone, setZone] = useState(null)

  const deckotions = [
    {
      value:1,
      label:"Deck 1"
    },
    {
      value:2,
      label:"Deck 2"
    },
    {
      value:3,
      label:"Deck 3"
    },

  ]
  const Areaotions = [
    {
      value:1,
      label:"Area 1"
    },
    {
      value:2,
      label:"Area 2"
    },
    {
      value:3,
      label:"Area 3"
    },

  ]
  const Zoneotions = [
    {
      value:1,
      label:"Zone 1"
    },
    {
      value:2,
      label:"Zone 2"
    },
    {
      value:3,
      label:"Zone 3"
    },

  ]

  return (
    <div className="h-[238px] max-w-[1213px] bg-white gap-9 p-7 flex flex-col rounded-2xl">
      <h1 className="text-3xl font-medium text-black "> Inventory</h1>
      <div className="bg-[#D8EEFF] rounded-lg p-3 gap-3 flex  items-center">
        <div className="bg-[#D9D9D9]  h-[30px] w-[30px]   rounded-lg"></div>
        <p className="text-black text-base font-medium">
          Lorem ipsum is the dummy text which is used as description.{" "}
        </p>
      </div>
      <div className="flex gap-6">
        <select value={deck} onCanPlay={(e) => setDeck(e.target.value)}>
          {deckotions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <select value={area} onCanPlay={(e) => setArea(e.target.value)}>
          {Areaotions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <select value={zone} onCanPlay={(e) => setZone(e.target.value)}>
          {Zoneotions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inventory
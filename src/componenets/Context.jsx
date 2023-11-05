import { useState, createContext } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedSide, setSelectedSide] = useState("FRONT");
  const [area, setArea] = useState(null)
  const [deck, setDeck] = useState(null)
  const [zone, setZone] = useState(null)
  const [selectedBox, setBox] = useState(null);
    const [arr, setArr] = useState([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
  

  const [page, setPage] = useState("HOME")
   

  const values = {
    open,
    setOpen,
    selectedSide,
    setSelectedSide,
    area,
    setArea,
    deck,
    setDeck,
    zone,
    setZone,
    selectedBox,
    setBox,
    page,
    setPage,
    arr,
    setArr
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default ContextProvider;

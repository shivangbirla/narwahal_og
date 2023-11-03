import { useState, createContext } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedSide, setSelectedSide] = useState("FRONT");
  const [area, setArea] = useState(null)
  const [deck, setDeck] = useState(null)
  const [zone, setZone] = useState(null)
  const [selectedBox, setBox] = useState(null);
   const [selectedProduct, setSelectedProduct] = useState([]);

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
    selectedProduct,
    setSelectedProduct,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default ContextProvider;

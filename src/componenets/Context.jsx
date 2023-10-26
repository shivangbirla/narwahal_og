import { useState, createContext } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedSide, setSelectedSide] = useState("FRONT");
  
  const values = {
    open,
    setOpen,
    selectedSide,
    setSelectedSide
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default ContextProvider;

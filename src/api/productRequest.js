import axios from "axios";

const API = axios.create({ baseURL: "http://139.59.59.166" });

export const getBoxes = async (zone, area, deck, selectedSide) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await API.get(
    `/products/fetch_boxes?deck=${deck}&area=${area}&zone=${zone}&side=${selectedSide.toLowerCase()}`,
    config
  );
};

export const getProducts = (selectedBox) => {
  if(!selectedBox) return null
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return API.get(
    `/products/fetch_products?deck=${selectedBox.deck}&area=${selectedBox.area}&zone=${selectedBox.zone}&side=front&level=${selectedBox.level}&box=${selectedBox.box}`,
    config
  );
};
export const searchProducts = (search) => {
  if(!search) return []
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return API.get(
    `/products/search_product?search_string=${search}`,
    config
  );
};

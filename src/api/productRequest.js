import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const getBoxes = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return API.get(`/products/fetch_boxes?deck=1&area=A&zone=1`, config);
};

export const getProducts = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return API.get(
    `/products/fetch_products?deck=1&area=A&zone=1&side=front&level=1&box=1`,
    config
  );
};

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const getProducts = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  };
  return API.get(
    `/products/fetch_products?deck=1&area=A&zone=1&side=1&level=1&box=1`,
    config
  );
};

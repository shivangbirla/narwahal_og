import axios from "axios";

const API = axios.create({ baseURL: "http://139.59.59.166:8000/docs#/" });

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

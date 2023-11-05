import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "./Context";
import ShowcaseLoading from "./loading/ShowcaseLoading";
import Inventory from "./Inventory";
import SideView from "./SideView";
import toast from "react-hot-toast";
import { getProducts } from "../api/productRequest";
import { Divider } from "@mui/material";

const Product = () => {
  const { selectedBox, setPage, selectedSide } = useContext(MainContext);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!selectedBox) return;
    
    const fetchData = async (selectedBox) => {
      setLoading(true);
      const res = await getProducts(selectedBox);
      const products = res.data;
      setSelectedProduct(products);
      setLoading(false)
    };
    fetchData(selectedBox);
  }, [selectedBox,selectedSide]);
  if (!selectedProduct) {
    toast.error("No Product Found");
    setPage("ZONE");
    return;
  }
  console.log(selectedBox)
  return (
    <div className="flex flex-col gap-10">
      <Inventory isZone={true} />
      {loading ? (
        <ShowcaseLoading />
      ) : (
        <div className="flex flex-col xl:flex-row gap-9 justify-between">
          <div className="h-[430] w-full xl:w-4/5 ">
            {!!selectedProduct && (
              <div className="w-full bg-white rounded-xl shadow-md p-7 flex flex-col gap-3">
                <div className="w-full text-black text-xl font-normal">
                  Deck-{selectedBox.deck} &gt; Area-{selectedBox.area}{" "}
                  &gt; Zone-{selectedBox.zone} &gt; Box-
                  {selectedBox.box}
                </div>
                <Divider className="w-full " />
                <table className=" text-black h-full p-7">
                  <thead className="bg-[#F3F9FF] rounded-xs">
                    <tr className="max-w-full">
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        MACH_DESC
                      </th>
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        MAKER_DESC
                      </th>
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        MATERIAL
                      </th>
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        MATERIAL_DESC
                      </th>
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        PART_NO
                      </th>
                      <th className="px-4 py-2 text-left text-base font-medium uppercase w-1/5">
                        ROB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.map((product, index) => (
                      <tr key={index} className="bg-white text-black">
                        <td className="px-4 py-2 whitespace-nowrap  !w-[169px]">
                          {product.mach_desc.slice(0, 10)}
                          {product.mach_desc.length > 10 && "..."}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap overflow-hidden w-1/5">
                          {product.maker_desc.slice(0, 10)}
                          {product.maker_desc.length > 10 && "..."}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap overflow-hidden w-1/5">
                          {product.material.slice(0, 10)}
                          {product.material.length > 10 && "..."}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap overflow-hidden w-1/5">
                          {product.material_desc.slice(0, 10)}
                          {product.material_desc.length > 10 && "..."}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap overflow-hidden w-1/5">
                          {product.part_no.slice(0, 10)}
                          {product.part_no.length > 10 && "..."}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap overflow-hidden w-1/5">
                          {product.rob}
                          {/* {product.rob.length > 16 && "..."} */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <SideView />
        </div>
      )}
    </div>
  );
};

export default Product;

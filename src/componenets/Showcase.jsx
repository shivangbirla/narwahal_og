/* eslint-disable no-sparse-arrays */
import React, { useContext, useEffect, useState } from "react";
import rack_png from "../assets/rack_image_1.png";
import { getBoxes, getProducts } from "../api/productRequest";
import { data_boxes } from "../data/data_boxes";
import { CircularProgress, Modal, selectClasses } from "@mui/material";
import { MainContext } from "./Context";
import Box from "./Box";

const Showcase = ({ setloading, params }) => {
  const [mappedProducts, setMappedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { selectedSide, setSelectedSide, selectedBox } =
    useContext(MainContext);
  const [arr, setArr] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
  const { zone, area, deck } = params;

  useEffect(() => {
    const updateArr = (data) => {
      const newArr = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ];

      try {
        data.forEach((boxData) => {
          const boxValue = boxData.box;
          if (boxValue >= 1 && boxValue <= 12) {
            const row = Math.floor((boxValue - 1) / 4);
            const col = (boxValue - 1) % 4;
           
            if (!!newArr[row][col]) {

              if(newArr[row][col][0].type ==="metal"){
                newArr[row][col] = [
                  ...newArr[row][col],
                  boxData
                ];
              }
              else{
                newArr[row][col] = [
                  boxData,
                  ...newArr[row][col],
                ];
              }
              
            } else newArr[row][col] = [boxData];
          }
        });
      } catch (error) {
      }

      setArr(newArr);
    };

    // Assuming data is already filtered as shown in your code

    const fetchData = async () => {
      try {
        const response = await getBoxes(zone, area, deck, selectedSide);
        let data = response.data;
        // console.log(data)

        // data = data.filter((box) => {
        //   return box.deck === 1 && box.area === "A" && box.zone === 1;
        // });

        updateArr(data);
        // console.log(data);
        // setloading(false);
        // setMappedProducts(data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedSide]);


  useEffect(()=>{
    if(!selectedBox) return 
    const fetchData = async (selectedBox)=>{
      const res = await getProducts(selectedBox);
      const products = res.data
      console.log(products)
      setSelectedProduct(products)
      setModalOpen(true)
    }
    fetchData(selectedBox);
  },[selectedBox])
  console.log("selectedBox",selectedBox)

  //
  // const handleButtonClick = (side) => {
  //   setSelectedSide(side);
  // };
  return (
    <div className="px-6 md:px-10 py-8 box-border xl:w-[831px] bg-white rounded-3xl flex justify-center">
      {/* <div className="container mx-auto flex justify-between items-center p-1.5">
        <div className="space-x-8 ml-6 mt-6 mb-1.5">
          <button
            className={`px-6 py-1 rounded-full border-2 font-semibold ${
              selectedSide === "FRONT"
                ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                : ""
            }`}
            onClick={() => handleButtonClick("FRONT")}
          >
            FRONT
          </button>
          <button
            className={`px-6 py-1 rounded-full border-2 font-semibold ${
              selectedSide === "BACK"
                ? "bg-[#D7EDFF] text-[#00a6fb] border-[#00a6fb]"
                : ""
            }`}
            onClick={() => handleButtonClick("BACK")}
          >
            BACK
          </button>
        </div>
      </div> */}

      <div className="flex flex-row ">
        <div className="relative">
          <img src={rack_png} alt="Rack" className="h-[430px] w-[430px]" />
          {/* <div className="grid grid-cols-4 absolute top-[5%] left-2 md:left-7 w-full h-fit">
              {sortedBackLevel1Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-[#595959] rounded-lg flex justify-center items-center cursor-pointer"
                  onClick={() => handleProductClick(product.item)}
                >
                  <h2 className="text-[14px] text-white overflow-hidden text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div> */}
          <div className="absolute flex flex-col h-[330px] gap-[13.6%] top-0 w-[calc(100%-20px)] left-[10px]">
            {arr.map((boxes) => {
              return (
                <div className="flex  top-[5%]    h-[80px]  ">
                  {boxes.slice(0, 2).map((box, index) => (
                    <Box key={index} index={index} box={box} className="mx-2" />
                  ))}
                  <div className="w-[40px]"></div>
                  {boxes.slice(2).map((box, index) => (
                    <Box key={index} index={index} box={box} className="mx-2" />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* {!selectedProduct &&(
          // <CircularProgress />
          <h1>loading</h1>
        )} */}
        <div>
          {selectedProduct && selectedProduct.length > 0 && (
            <div className="absolute rotate-90 md:rotate-0 md:inset-64 h-fit rounded-2xl overflow-hidden">
              <table className="min-w-full bg-white text-black  shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.map((product, index) => (
                    <tr key={index} className="bg-white text-black">
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.mach_desc}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.maker_desc}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.material}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.material_desc}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.part_no}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap ">
                        {product.rob}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Showcase;

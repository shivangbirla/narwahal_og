import React, { useEffect, useState } from "react";
import rack_png from "../assets/rack_image_1.png";
import { getProducts } from "../api/productRequest";
import { data_boxes } from "../data/data_boxes";




const Showcase = () => {
  const [mappedProducts, setMappedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedSide, setSelectedSide] = useState("FRONT");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        const data = response.data;
        console.log(data);

        setMappedProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const frontProducts = data_boxes.products.filter(
    (product) => product.side === "front"
  );
  const backProducts = data_boxes.products.filter(
    (product) => product.side === "back"
  );

  // console.log("mapped products:" + mappedProducts);
  // function to group products by level
  const groupProductsByLevel = (products, level) => {
    return products.filter((product) => product.level === level);
  };

  // Group front products by level
  const frontLevel1Products = groupProductsByLevel(frontProducts, 1);
  const frontLevel2Products = groupProductsByLevel(frontProducts, 2);
  const frontLevel3Products = groupProductsByLevel(frontProducts, 3);

  // Group back products by level
  const backLevel1Products = groupProductsByLevel(backProducts, 1);
  const backLevel2Products = groupProductsByLevel(backProducts, 2);
  const backLevel3Products = groupProductsByLevel(backProducts, 3);

  // Create a function to sort products by product.box in ascending order
  const sortProductsByBoxAscending = (products) => {
    return products.slice().sort((a, b) => a.box - b.box);
  };

  const sortedFrontLevel1Products =
    sortProductsByBoxAscending(frontLevel1Products);
  const sortedFrontLevel2Products =
    sortProductsByBoxAscending(frontLevel2Products);
  const sortedFrontLevel3Products =
    sortProductsByBoxAscending(frontLevel3Products);

  const sortedBackLevel1Products =
    sortProductsByBoxAscending(backLevel1Products);
  const sortedBackLevel2Products =
    sortProductsByBoxAscending(backLevel2Products);
  const sortedBackLevel3Products =
    sortProductsByBoxAscending(backLevel3Products);

  const handleProductClick = (itemArray) => {
    setSelectedProduct(itemArray);
  };

  const handleButtonClick = (side) => {
    setSelectedSide(side);
  };
  return (
    <div className="px-10 py-8 w-[831px] bg-white rounded-3xl flex justify-center">
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

      {selectedSide === "FRONT" ? (
        <div className="flex flex-row ">
          <div className="relative">
            <img src={rack_png} alt="Rack" className="h-[430px] w-[430px]  " />
            <div className="grid grid-cols-4 absolute top-[5%] left-7 w-full h-full">
              {sortedFrontLevel1Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-[#595959] rounded-lg flex justify-center items-center cursor-pointer"
                  onClick={() => handleProductClick(product.item)}
                >
                  <h2 className="text-[12px] text-white overflow-hidden text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 absolute text-white overflow-hidden top-[35%] left-7 w-full h-full">
              {sortedFrontLevel2Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px]  bg-[#595959] rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <h2 className="text-[14px] text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 absolute top-[64%] left-7 w-full h-full">
              {sortedFrontLevel3Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-[#595959] rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <h2 className="text-[14px] text-white overflow-hidden text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mt-20">
          <div className="relative">
            <img src={rack_png} alt="Rack" className="h-[430px] w-[430px]" />
            <div className="grid grid-cols-4 absolute top-[-5%] left-7 w-full h-full">
              {sortedBackLevel1Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-gray-300 rounded-lg flex justify-center items-center cursor-pointer"
                  onClick={() => handleProductClick(product.item)}
                >
                  <h2 className="text-[14px] text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 absolute top-[21%] left-7 w-full h-full">
              {sortedBackLevel2Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-gray-300 rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <h2 className="text-[14px] text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 absolute top-[47%] left-7 w-full h-full">
              {sortedBackLevel3Products.map((product, index) => (
                <div
                  key={product._id}
                  className="w-[50px] h-[50px] bg-gray-300 rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <h2 className="text-[14px] text-center">
                    {product.material}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div>
        {selectedProduct && selectedProduct.length > 0 && (
          <div className="absolute left-[45vw] top-[10vh] w-[50vw] h-[80vh] overflow-y-auto">
            <table className="min-w-full bg-[#343a40] text-white rounded-2xl shadow-md">
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
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#6c757d]" : "bg-[#ced4da]"
                    }
                  >
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.mach_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.maker_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.material}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.material_desc}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.part_no}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                      {product.rob}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Showcase;

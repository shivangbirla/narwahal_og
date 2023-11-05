import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getBoxes } from "../api/productRequest";
import { MainContext } from "./Context";
import Inventory from "./Inventory";
import Showcase from "./Showcase";
import ShowcaseLoading from "./loading/ShowcaseLoading";
import SideView from "./SideView";

const Zone = ({ searchValue, setSearchValue }) => {
  const [loading, setloading] = useState(false);
  const {
    selectedSide,
    setSelectedSide,
    area,
    setArea,
    deck,
    setDeck,
    zone,
    setZone,
    page,
    setPage,
    arr,
    setArr
  } = useContext(MainContext);



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
              if (newArr[row][col][0].type === "metal") {
                newArr[row][col] = [...newArr[row][col], boxData];
              } else {
                newArr[row][col] = [boxData, ...newArr[row][col]];
              }
            } else newArr[row][col] = [boxData];
          }
        });
      } catch (error) {}

      setArr(newArr);
    };

    // Assuming data is already filtered as shown in your code

    const fetchData = async () => {
      setloading(true);
      try {
        const response = await getBoxes(zone, area, deck, selectedSide);

        let data = response.data;

        updateArr(data);
        
      } catch (error) {
        toast.error(error.response.data.detail);
        setPage("HOME");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [area, deck, zone, selectedSide]);

  return (
    <div className="flex flex-col gap-10">
      <Inventory isZone={true} />
      {loading ? (
        <ShowcaseLoading />
      ) : (
        <div className="flex flex-col md:flex-row gap-9 justify-between">
          <div className="h-[535px] xl:w-[831px]">
            <Showcase divider />
          </div>
          <SideView />
        </div>
      )}
    </div>
  );
};

export default Zone;

// box of level1 will be stored and then make an array with the order of boxno.
// then map that data and after every 4th box start iterating from start with higher margin

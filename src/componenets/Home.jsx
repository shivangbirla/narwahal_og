import { TramSharp } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import rack_png from "../assets/rack_image_1.png";
import { cn } from "../lib/utils";

const Home = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("2nd Floor");

  const tabs = [
    {
      content: "2nd Floor",
    },
    {
      content: "3rd Floor",
    },
    {
      content: "Bonus Store",
    },
  ];

  useEffect(() => {
    const createElementSvg = () => {
      const svg = document.getElementById("mySvg");
      const trapezium = document.getElementById("myTrapezium");
      const existingLines = svg.querySelectorAll("line");
      existingLines.forEach((line) => {
        line.remove();
      });
      const existingRect = svg.querySelectorAll("rect");
      existingRect.forEach((line) => {
        line.remove();
      });
      const existingText = svg.querySelectorAll("text");
      existingText.forEach((line) => {
        line.remove();
      });

      const { offsetWidth, offsetHeight } = ref.current;
      console.log(offsetWidth, offsetHeight);

      const width = offsetWidth > 950 ? 950 : offsetWidth - 48;
      const height = offsetHeight > 614 ? 614 : offsetHeight - 48;

      // Set canvas dimensions

      // Rest of your code...

      const borderRadius = 10;

      const upperWidth = width - 20;
      const bottomWidth = (width - 20) * 0.8; // 80% of canvas width

      const topX = (width - upperWidth) / 2;
      const topY = 5;

      const bottomY = height - 25;

      const bottomLeftX = (width - bottomWidth) / 2; // Centered horizontally
      const bottomRightX = upperWidth - (upperWidth - bottomWidth) / 2; // Centered horizontally

      const m = (bottomY - topY) / (bottomRightX - upperWidth);
      const c = topY - m * upperWidth;
      // Set trapezium coordinates
      trapezium.setAttribute(
        "points",
        `${
          topX + 5
        },${topY} ${upperWidth},${topY} ${bottomRightX},${bottomY} ${bottomLeftX},${bottomY} ${
          topX + 5
        }`
      );

      const x1 = upperWidth * 0.16;
      const x2 = upperWidth * 0.28;
      const y1 = topY;
      const y2 = (topY + bottomY) * 0.5;

      trapezium.setAttribute("stroke", "#FFF");
      trapezium.setAttribute("stroke-width", "10");
      trapezium.setAttribute("fill", "#F3F9FF");
      trapezium.setAttribute("stroke-linejoin", "round");
      trapezium.setAttribute("stroke-linecap", "round");
      trapezium.setAttribute("filter", "url(#shadow)");

      const createText = (svg, x, y, textContent, fontSize, maxWidth) => {
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("font-size", fontSize);

        // Create a text element with a specific content
        const textNode = document.createTextNode(textContent);
        text.appendChild(textNode);

        // Get the computed text length
        const textWidth = text.getComputedTextLength();

        // Check if the text length exceeds the maxWidth
        if (textWidth > maxWidth) {
          // Set the maximum length the text element should have
          text.setAttribute("textLength", maxWidth);

          // Adjust the length to fit the text within the specified length
          text.setAttribute("lengthAdjust", "spacingAndGlyphs");
        }

        svg.appendChild(text);
      };

      const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect1.setAttribute("x", upperWidth * 0.16);
      rect1.setAttribute("y", topY + 3);
      rect1.setAttribute("width", upperWidth * 0.12); // Adjust width as needed
      rect1.setAttribute("height", (bottomY - (topY + 4)) / 2);
      rect1.setAttribute("stroke", "#FFF");
      rect1.setAttribute("stroke-width", "5");
      rect1.setAttribute("fill", "#F3F9FF");

      rect1.addEventListener("click", () => {
        setIsOpen(true);
      });

      // Hover effect for rect1 with transition
      rect1.addEventListener("mouseover", () => {
        rect1.style.transition = "fill 0.3s ease";
        rect1.style.cursor = "pointer"; // Apply transition
        // Apply transition
        rect1.setAttribute("fill", "#d7f0fc"); // Change fill color on hover
      });

      rect1.addEventListener("mouseout", () => {
        rect1.style.transition = "fill 0.3s ease"; // Apply transition
        rect1.setAttribute("fill", "#F3F9FF"); // Restore fill color on mouseout
      });

      svg.appendChild(rect1);

      // Create text for rect1
      createText(
        svg,
        upperWidth * 0.16 + (upperWidth * 0.12) / 2,
        topY + 3 + (bottomY - (topY + 4)) / 2 / 2,
        "Purifier Room",
        13,
        upperWidth * 0.12 // Max width of rect1
      );

      const py = (1 - 0.28) * (bottomY - topY) + topY;
      const px = (py - c) / m;
      const px2 = (1 - 0.28) * upperWidth + topX;

      const polygon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polygon"
      );
      polygon.setAttribute(
        "points",
        `${px - 5},${py} ${px2},${py} ${px2},${bottomY - 5} ${
          bottomRightX - 5
        },${bottomY - 5}`
      );
      polygon.setAttribute("stroke", "#FFF");
      polygon.setAttribute("stroke-width", "5");
      polygon.setAttribute("fill", "#F3F9FF");
      polygon.setAttribute("stroke-linejoin", "round");
      polygon.setAttribute("stroke-linecap", "round");
      svg.appendChild(polygon);
      polygon.addEventListener("click", () => {
        setIsOpen(true);
      });

      // Hover effect for polygon with transition
      polygon.addEventListener("mouseover", () => {
        polygon.style.transition = "fill 0.3s ease";
        polygon.style.cursor = "pointer"; // Apply transition
        polygon.setAttribute("fill", "#d7f0fc"); // Change fill color on hover
      });

      polygon.addEventListener("mouseout", () => {
        polygon.style.transition = "fill 0.3s ease"; // Apply transition
        polygon.setAttribute("fill", "#F3F9FF"); // Restore fill color on mouseout
      });

      // Repeat the same process for rect2...

      const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect2.setAttribute("x", upperWidth * 0.16);
      rect2.setAttribute("y", (bottomY - (topY + 4)) / 2);
      rect2.setAttribute("width", upperWidth * 0.12); // Adjust width as needed
      rect2.setAttribute("height", (bottomY - (topY + 4)) / 2 + 6);
      rect2.setAttribute("stroke", "#FFF");
      rect2.setAttribute("stroke-width", "5");
      rect2.setAttribute("fill", "#F3F9FF");

      rect2.addEventListener("click", () => {
        setIsOpen(true);
      });

      // Hover effect for rect2 with transition
      rect2.addEventListener("mouseover", () => {
        rect2.style.transition = "fill 0.3s ease";
        rect2.style.cursor = "pointer"; // Apply transition
        // Apply transition
        rect2.setAttribute("fill", "#d7f0fc"); // Change fill color on hover
      });

      rect2.addEventListener("mouseout", () => {
        rect2.style.transition = "fill 0.3s ease"; // Apply transition
        rect2.setAttribute("fill", "#F3F9FF"); // Restore fill color on mouseout
      });

      svg.appendChild(rect2);

      // Create text for rect2
      createText(
        svg,
        upperWidth * 0.16 + (upperWidth * 0.12) / 2,
        (bottomY - (topY + 4)) / 2 + ((bottomY - (topY + 4)) / 2 + 6) / 2,
        "Engine Control Room",
        13,
        upperWidth * 0.12 // Max width of rect2
      );

      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="233" height="224" viewBox="0 0 233 224" fill="none">
          <g filter="url(#filter0_d_1520_6463)">
            <path d="M22.9567 20.7468L43.5378 3.59598C44.7752 2.56475 46.3351 2 47.9459 2H224.313C228.116 2 231.199 5.08288 231.199 8.88581V215.46C231.199 219.263 228.116 222.346 224.313 222.346H8.88582C5.08289 222.346 2 219.263 2 215.46V42.5728C2 40.6135 2.83465 38.747 4.29492 37.4407L22.9567 20.7468Z" fill="#F8F8F8"/>
            <path d="M5.60661 38.907L24.2427 22.2361L44.7972 5.10736C45.6812 4.37076 46.7953 3.96737 47.9459 3.96737H224.313C227.03 3.96737 229.232 6.16944 229.232 8.88581V215.46C229.232 218.177 227.03 220.379 224.313 220.379H8.88582C6.16944 220.379 3.96737 218.177 3.96737 215.46V42.5728C3.96737 41.1733 4.56355 39.8401 5.60661 38.907Z" stroke="white" stroke-width="3.93475"/>
          </g>
          <defs>
            <!-- Your filter definition -->
          </defs>
        </svg>
      `;
      svg.style.position = "relative";

      // const svgContainer = document.createElement("div");
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

      // Apply a transformation to center the content
      const groupWidth = 0.23 * width;
      const groupHeight = 0.23 * width;
      const translateX = width / 2 - groupWidth / 2;
      const translateY = height / 2 - groupHeight / 2;

      // Apply a transformation to center the content by subtracting half the width and height
      group.setAttribute("transform", `translate(${translateX},${translateY})`);
      // group.setAttribute("transform", `translate(-50%,-50%)`);

      // Append the new SVG content to the group element
      group.innerHTML = svgString.trim();
      group.addEventListener("click", () => {
        setIsOpen(true);
      });
      group.addEventListener("mouseover", () => {
        group.style.cursor = "pointer"; // Apply transition
      });

      // Append the SVG to your existing SVG container
      svg.appendChild(group);
    };
    createElementSvg();

    window.addEventListener("resize", createElementSvg);
    return () => window.removeEventListener("resize", createElementSvg);
  }, []);
  return (
    <div className="flex flex-col gap-10 h-fit ">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        classes={"h-[80vh]  flex items-start flex-col gap-8  justify-start  "}
      >
        {/* rotate-90 mt-[6vh] */}
        <h1 className="text-center w-full text-2xl">Main Inventory</h1>
        <div className="flex flex-row w-full justify-around items-start">
          <div className="relative w-fit -rotate-90 mt-[36vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center">
                abc
              </div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center">
                abc
              </div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
            </div>
          </div>
          <div className="relative w-fit rotate-90 mt-[6vh] ">
            <img src={rack_png} alt="Rack" className="h-[20vh] w-[30vh] " />
            <img
              src={rack_png}
              alt="Rack"
              className="h-[20vh] w-[30vh] top-0 absolute left-[97%]"
            />
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center">
                abc
              </div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-0">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[30%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm flex justify-center items-center"></div>
            </div>
            <div className="absolute flex flex-row justify-around w-[100%] left-[97%] z-10 h-5 top-[60%]">
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
              <div className="w-[95px] h-[30px] bg-[#F3FAFF] border border-[#47AFFF] rounded-sm"></div>
            </div>
          </div>
        </div>
      </Modal>
      <h2 className="text-[36px] font-medium ">Inventory</h2>
      <div className="flex flex-col">
        <ul className="tabs group">
          {tabs.map((tab, index) => (
            <li
              className={cn(
                // "w-1/2 bg-[#E8E8E8] py-3 px-11",
                selectedView === tab.content && "active"
              )}
              onClick={() => {
                setSelectedView(tab.content);
              }}
            >
              <div>{tab.content}</div>
            </li>
          ))}
        </ul>
        <div
          ref={ref}
          className="w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1175px] box-border min-h-[600px] max-h-[765px] bg-white rounded-2xl rounded-tl-none p-6"
        >
          {/* <canvas
          id="myCanvas"
          className="w-full h-full max:w-[950px] max:h-[614px]"
        ></canvas> */}

          <svg
            id="mySvg"
            className="w-full flex justify-center items-center h-full max-w-[950px] min-h-[600px] max-h-[614px]"
          >
            <polygon
              id="myTrapezium"
              className="fill-[#F3F9FF] border-5 border-white shadow-2xl stroke-[#FFF] stroke-width-5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;

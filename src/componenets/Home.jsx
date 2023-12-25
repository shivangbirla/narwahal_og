import { TramSharp } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    // const canvas = document.getElementById("myCanvas");
    // const ctx = canvas.getContext("2d");

    // // Get height and width from ref
    // const { offsetWidth, offsetHeight } = ref.current;

    // const width = offsetWidth > 950 ? 950 : offsetWidth;
    // const height = offsetHeight > 614 ? 914 : offsetHeight;

    // // Set canvas dimensions
    // canvas.width = width;
    // canvas.height = height;

    // // Rest of your code...

    // const borderRadius = 10;

    // const upperWidth = canvas.width - 20;
    // const bottomWidth = (canvas.width - 20) * 0.8; // 80% of canvas width

    // const topX = (canvas.width - upperWidth) / 2;
    // const topY = (canvas.width - upperWidth) / 2;

    // const bottomLeftX = (canvas.width - 20 - bottomWidth) / 2; // Centered horizontally
    // const bottomY = canvas.height - 20;

    // const bottomRightX =
    //   canvas.width - 20 - (canvas.width - 20 - bottomWidth) / 2; // Centered horizontally

    // // Set stroke and fill styles
    // ctx.strokeStyle = "#FFF"; // White stroke
    // ctx.lineWidth = 10; // Stroke width
    // ctx.fillStyle = "#F3F9FF"; // Inner fill color

    // // Draw trapezium shape
    // ctx.beginPath();
    // ctx.moveTo(topX + borderRadius, topY);

    // ctx.lineTo(upperWidth + topX - borderRadius, topY);
    // ctx.arcTo(
    //   upperWidth + topX,
    //   topY,
    //   upperWidth + topX,
    //   topY + borderRadius,
    //   borderRadius
    // );

    // ctx.lineTo(bottomRightX + borderRadius, bottomY - borderRadius);
    // ctx.arcTo(
    //   bottomRightX + borderRadius,
    //   bottomY,
    //   bottomRightX,
    //   bottomY,
    //   borderRadius
    // );

    // // ctx.moveTo(bottomLeftX + borderRadius, bottomLeftY );
    // ctx.lineTo(bottomLeftX + borderRadius, bottomY);
    // ctx.arcTo(
    //   bottomLeftX,
    //   bottomY,
    //   bottomLeftX,
    //   bottomY - borderRadius,
    //   borderRadius
    // );

    // ctx.lineTo(topX, topY + borderRadius);
    // ctx.arcTo(
    //   topX,
    //   topY + borderRadius,
    //   topX + borderRadius,
    //   topY,
    //   borderRadius
    // );
    // ctx.lineTo(topX + borderRadius, topY);

    // ctx.closePath();

    // // Apply box shadow to the shape
    // ctx.shadowBlur = 5;
    // ctx.shadowColor = "gray";

    // // Fill and stroke the shape
    // ctx.fill();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(topX + upperWidth * 1.4, topY); // Adjust the multiplier here
    // ctx.lineTo(topX + upperWidth * 1.4, bottomY);
    // ctx.stroke();

    //svg
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
      //  const line = document.createElementNS(
      //    "http://www.w3.org/2000/svg",
      //    "rect"
      //  );

      //  line.setAttribute("x1", upperWidth * 0.16);
      //  line.setAttribute("y1", topY);
      //  line.setAttribute("x2", upperWidth * 0.16);
      //  line.setAttribute("y2", bottomY);
      //  line.setAttribute("stroke", "#FFF");
      //  line.setAttribute("stroke-width", "5");
      //  line.setAttribute("stroke-linecap", "round");
      //  svg.appendChild(line);

      //  const line2 = document.createElementNS(
      //    "http://www.w3.org/2000/svg",
      //    "line"
      //  );

      //  line2.setAttribute("x1", upperWidth * 0.28);
      //  line2.setAttribute("y1", topY);
      //  line2.setAttribute("x2", upperWidth * 0.28);
      //  line2.setAttribute("y2", bottomY);
      //  line2.setAttribute("stroke", "#FFF");
      //  line2.setAttribute("stroke-width", "5");
      //  line2.setAttribute("stroke-linecap", "round");
      //  svg.appendChild(line2);
      //  const l3 = document.createElementNS("http://www.w3.org/2000/svg", "line");

      //  l3.setAttribute("x1", upperWidth * 0.16);
      //  l3.setAttribute("y1", (topY + bottomY) * 0.5);
      //  l3.setAttribute("x2", upperWidth * 0.28);
      //  l3.setAttribute("y2", (topY + bottomY) * 0.5);
      //  l3.setAttribute("stroke", "#FFF");
      //  l3.setAttribute("stroke-width", "5");
      //  l3.setAttribute("stroke-linecap", "round");
      //  svg.appendChild(l3);

      // Function to create text elements
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

        // Check if the text exceeds the maxWidth and needs wrapping
        //TODO: fix this
        //  const textWidth = text.getComputedTextLength();
        //  if (textWidth > maxWidth) {
        //    const words = textContent.split(" ");
        //    let line = "";
        //    let lineHeight = fontSize * 1.2; // Set line height based on font-size

        //    for (let i = 0; i < words.length; i++) {
        //      let testLine = line + words[i] + " ";
        //      textNode.data = testLine;

        //      // Check if adding the next word exceeds the maxWidth
        //      if (text.getComputedTextLength() > maxWidth) {
        //        const tspan = document.createElementNS(
        //          "http://www.w3.org/2000/svg",
        //          "tspan"
        //        );
        //        tspan.setAttribute("x", x);
        //        tspan.setAttribute("dy", lineHeight);
        //        tspan.textContent = line;
        //        text.appendChild(tspan);
        //        line = words[i] + " ";
        //      } else {
        //        line = testLine;
        //      }
        //    }

        //    // Add the last line
        //    const tspan = document.createElementNS(
        //      "http://www.w3.org/2000/svg",
        //      "tspan"
        //    );
        //    tspan.setAttribute("x", x);
        //    tspan.setAttribute("dy", lineHeight);
        //    tspan.textContent = line;
        //    text.appendChild(tspan);

        //    // Hide the original text element
        //    text.style.display = "none";
        //  }
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
        alert("clicked");
      });

      // Hover effect for rect1 with transition
      rect1.addEventListener("mouseover", () => {
        rect1.style.transition = "fill 0.3s ease"; // Apply transition
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
        alert("clicked");
      });

      // Hover effect for rect2 with transition
      rect2.addEventListener("mouseover", () => {
        rect2.style.transition = "fill 0.3s ease"; // Apply transition
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
    };
    createElementSvg();

    window.addEventListener("resize", createElementSvg);
    return () => window.removeEventListener("resize", createElementSvg);
  }, []);
  return (
    <div className="flex flex-col gap-10 h-fit ">
      <h2 className="text-[36px] font-medium ">Inventory</h2>
      <div
        ref={ref}
        className="w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1175px] box-border min-h-[600px] max-h-[765px] bg-white rounded-2xl p-6"
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
  );
};

export default Home;

// import React, { useState } from 'react'

// const Select = (value) => {
//   const {currVal, label, options, onChange } = value
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleOptions = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     onChange(option);
//     toggleOptions();
//   };

//   const clearSelection = () => {
//     onchange(null);
//   };
//   console.log(value)
//   return (
//     <div className="relative">
//       <div
//         className={`custom-select relative border rounded-7 border-gray-500 flex px-1.5 py-3 items-center gap-0.5 cursor-pointer rounded-lg ${
//           isOpen ? "bg-blue-200" : ""
//         }`}
//         onClick={toggleOptions}
//       >
//         <span>{currVal ? currVal.label : label}</span>
//         <button
//           className=""
//           onClick={(e) => {
//             e.stopPropagation();
//             currVal && clearSelection();
//           }}
//         >
//           {currVal ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="12"
//               height="13"
//               viewBox="0 0 12 13"
//               fill="none"
//             >
//               <path
//                 d="M1.33268 12.3333L0.166016 11.1666L4.83268 6.49996L0.166016 1.83329L1.33268 0.666626L5.99935 5.33329L10.666 0.666626L11.8327 1.83329L7.16602 6.49996L11.8327 11.1666L10.666 12.3333L5.99935 7.66663L1.33268 12.3333Z"
//                 fill="#343434"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <mask
//                 id="mask0_456_5787"
//                 style="mask-type:alpha"
//                 maskUnits="userSpaceOnUse"
//                 x="0"
//                 y="0"
//                 width="24"
//                 height="24"
//               >
//                 <rect width="24" height="24" fill="#D9D9D9" />
//               </mask>
//               <g mask="url(#mask0_456_5787)">
//                 <path d="M12 15L7 10H17L12 15Z" fill="#1C1B1F" />
//               </g>
//             </svg>
//           )}
//         </button>
//       </div>
//       {isOpen && (
//         <div className="absolute z-10 top-10 bg-white border rounded-lg border-gray-500 mt-2 p-2">
//           {options?.map((option) => (
//             <div
//               key={option.value}
//               className="cursor-pointer"
//               onClick={() => handleOptionSelect(option)}
//             >
//               {option.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
//   }

// export default Select
// import React, { useState } from 'react'

// const Select = (value,onChange,label,options) => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleOptions = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     toggleOptions();
//   };

//   const clearSelection = () => {
//     setSelectedOption(null);
//   };
//   return (
//     <div
//       className={`custom-select relative border rounded-7 border-gray-500 flex p-6/12/6/18 items-center gap-2 cursor-pointer ${
//         isOpen ? "bg-blue-200" : ""
//       }`}
//       onClick={toggleOptions}
//     >
//       {selectedOption ? (
//         <>
//           <span>{selectedOption.label}</span>
//           <button
//             className="text-red-600"
//             onClick={(e) => {
//               e.stopPropagation();
//               clearSelection();
//             }}
//           >
//             X
//           </button>
//         </>
//       ) : (
//         <span>{placeholder}</span>
//       )}
//       {isOpen && (
//         <div className="absolute z-10 top-10 bg-white border rounded-7 border-gray-500 mt-2 p-2">
//           {options.map((option) => (
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
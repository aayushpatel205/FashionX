import { useState } from "react";

const SortDropDown = ({ isProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("High To Low");

  const options = [
    "High to Low",
    "Low to High",
    "High to medium",
    "Medium to High",
  ];
  return (
    <div className="relative w-[30%]">
      {/* Dropdown Button */}
        <div
          className="border-2 border-gray-200 text-sm h-10 flex items-center px-4 justify-between bg-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-1.5">
            <span className="text-gray-500">Sort by: Price:</span>
            <span className="text-black">{selectedOption}</span>
          </div>
          <img
            src="../src/assets/frontend_assets/dropdown_icon.png"
            className={`w-3 h-5 transform transition-transform ${
              isOpen ? "rotate-270" : "rotate-90"
            }`}
          />
        </div>
      

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full bg-white text-black mt-2 shadow-md border-gray-200 border">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropDown;

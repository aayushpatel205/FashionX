import React, { useState } from "react";
import SortDropDown from "./SortDropDown";

const UserPreferences = () => {
  const [categoryDropDown, setCategoryDropDown] = useState({
    category: "",
    subCategory: "",
  });
  const [selectedSize, setSelectedSize] = useState("S");
  const sizesArray = ["S", "M", "L", "XL", "XXL"];
  const optionsArrayCategory = ["Men", "Women", "Kids"];
  const optionsArraySubCategory = ["Topwear", "Bottomwear", "Winterwear"];

  return (
    <div className="flex flex-col gap-10 w-[80%] relative">
      <div className="flex gap-2 relative w-fit z-10 items-center">
        <p className="text-lg w-[400px]">
          Preferred Category: <span className="font-medium">{categoryDropDown?.category}</span>
        </p>
        <SortDropDown
          setCategoryDropDown={setCategoryDropDown}
          categoryDropDown={categoryDropDown}
          category={"Category"}
          optionsArray={optionsArrayCategory}
        />
      </div>

      <div className="flex gap-5 relative items-center">
        <p className="text-lg min-w-fit">
          Preferred SubCategory: <span className="font-medium">{categoryDropDown?.subCategory}</span>
        </p>
        <SortDropDown
          setCategoryDropDown={setCategoryDropDown}
          categoryDropDown={categoryDropDown}
          category={"Sub Category"}
          optionsArray={optionsArraySubCategory}
        />
      </div>

      <div className="flex gap-5 items-center">
        <p className="text-lg min-w-fit">
          Preferred Size: <span className="font-medium">{selectedSize}</span>
        </p>
        <div className="flex gap-3">
          {sizesArray?.map((element) => (
            <div
              key={element}
              onClick={() => setSelectedSize(element)}
              className={`h-14 cursor-pointer w-14 border-2 flex justify-center items-center bg-gray-100 transition-all duration-200 
                ${selectedSize === element ? "border-amber-400" : "border-gray-200"}`}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;

import React from "react";
import uploadArea from "./../src/assets/admin_assets/upload_area.png";
import SortDropDown from "./SortDropDown";

const AdminAddItem = () => {
  const optionsArrayCategory = ["Men", "Women", "Kids"];
  const optionsArraySubCategory = ["Topwear", "Bottomwear", "Winterwear"];
  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl text-gray-400 font-medium">Upload Image</p>
      <div className="h-28 w-28 flex gap-2">
        <img
          src="./../src/assets/admin_assets/upload_area.png"
          className="h-full w-full cursor-pointer"
        />
        <img
          src="./../src/assets/admin_assets/upload_area.png"
          className="h-full w-full cursor-pointer"
        />
        <img
          src="./../src/assets/admin_assets/upload_area.png"
          className="h-full w-full cursor-pointer"
        />
        <img
          src="./../src/assets/admin_assets/upload_area.png"
          className="h-full w-full cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-700">Product Name</p>
        <input
          placeholder="Product name..."
          className="w-[30%] border-2 border-gray-200 h-10 px-2 outline-none"
          type="email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-700">Product Description</p>
        <textarea
          placeholder="Please add description..."
          className="h-36 border-2 w-[40%] resize-none p-2 border-gray-200 outline-none"
        />
      </div>

      <div className="flex gap-5 w-[100%]">
        <div className="gap-1 flex flex-col w-[20%]">
          <p className="text-gray-700">Category</p>
          <SortDropDown
            category={"Category"}
            optionsArray={optionsArrayCategory}
          />
        </div>
        <div className="gap-1 flex flex-col w-[25%]">
          <p className="text-gray-700">Sub Category</p>
          <SortDropDown
            category={"Sub Category"}
            optionsArray={optionsArraySubCategory}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-700">Product Sizes</p>
        <div className="flex gap-4">
          <div className="h-11 w-11 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
            S
          </div>
          <div className="h-11 w-11 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
            M
          </div>
          <div className="h-11 w-11 border-2 flex justify-center items-center bg-gray-100  border-amber-400">
            L
          </div>
          <div className="h-11 w-11 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
            XL
          </div>
          <div className="h-11 w-11 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
            XXL
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" className="h-4 w-4 accent-black" />
        <span>Add to Bestseller</span>
      </div>
      <button className="w-[12%] mt-3 uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer">
        log out
      </button>
    </div>
  );
};

export default AdminAddItem;

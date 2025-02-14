import React from "react";
import productImg from "../src/assets/frontend_assets/p_img2_1.png";

const AdminListItems = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl text-gray-400 font-medium">All Products List</p>

      <div>
        <div className="flex px-3 py-1 border border-gray-400">
          <p className="w-[15%]">Image</p>
          <p className="w-[35%]">Name</p>
          <p className="w-[15%]">Category</p>
          <p className="w-[20%]">Price</p>
          <p className="w-[15%]">Action</p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          <div className="flex px-3 py-2 border border-gray-400 items-center">
            <img className="w-[5%] h-16" src={productImg}/>
            <p className="w-[35%] ml-[10%]">Men's Neck Top With Grey Circular Neck Band</p>
            <p className="w-[15%] ml-[0%]">Kids</p>
            <p className="w-[20%]">$200</p>
            <p className="w-[15%]">Action</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AdminListItems;

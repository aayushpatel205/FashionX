import React, { useState } from "react";

const ProductPage = () => {
  const [active, setActive] = useState();
  return (
    <div className="w-[100%] flex flex-col gap-32">
      <div className="px-10 mt-10 flex gap-4 h-[550px]">
        <div className="flex flex-col h-full justify-between">
          <img
            src="../src/assets/frontend_assets/p_img1.png"
            className="h-32 w-28"
          />
          <img
            src="../src/assets/frontend_assets/p_img1.png"
            className="h-32 w-28"
          />
          <img
            src="../src/assets/frontend_assets/p_img1.png"
            className="h-32 w-28"
          />
          <img
            src="../src/assets/frontend_assets/p_img1.png"
            className="h-32 w-28"
          />
        </div>
        <div className="h-full w-[32%]">
          <img
            className="h-full w-full"
            src="../src/assets/frontend_assets/p_img1.png"
          />
        </div>
        <div className="ml-4 pt-2 flex flex-col gap-6 w-[45%]">
          <p className="text-black text-2xl font-medium">
            Women Round Neck Cotton Top
          </p>
          <p className="text-black text-2xl font-medium ">$100</p>
          <p className="text-gray-500">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment..
          </p>
          <p className="font-medium text-gray-500">Select Size</p>
          <div className="flex gap-4">
            <div className="h-14 w-14 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
              S
            </div>
            <div className="h-14 w-14 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
              M
            </div>
            <div className="h-14 w-14 border-2 flex justify-center items-center bg-gray-100  border-amber-400">
              L
            </div>
            <div className="h-14 w-14 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
              XL
            </div>
            <div className="h-14 w-14 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
              XXL
            </div>
          </div>
          
          {/* This is button below !! */}
          <button className="w-[24%] bg-black h-12 text-white text-sm hover:opacity-85 mt-3">ADD TO CART</button>

          <div className="w-[70%] h-[2px] bg-gray-200 mt-4"></div>

          <div className="flex flex-col gap ml-2">
            <p className="text-gray-500">100% Original Product</p>
            <p className="text-gray-500">Cash on delivery is available on this product.</p>
            <p className="text-gray-500">Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] border-gray-200 h-52 ml-14">
        <div className="flex h-12">
          <p className="h-12 border-x border-t border-gray-200  w-[12%] flex justify-center items-center font-medium text-sm text-gray-700">Description</p>
          <p className="h-12 border-r border-t border-gray-200 w-[12%] flex justify-center items-center font-medium text-sm text-gray-700 bg-gray-100">Reviews</p>
        </div>
        <div className="h-40 border border-gray-200 px-10 py-6 text-gray-700 text-sm leading-6">
        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.

        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

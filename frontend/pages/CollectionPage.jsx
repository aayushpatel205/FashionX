import React from "react";
import ProductCard from "../components/ProductCard";

const CollectionPage = () => {
  return (
    <div className="flex gap-2 w-[100%] no-scrollbar">
      <div className="w-[23%] px-10 mt-20">
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 text-2xl">FILTERS</p>

          <div className="w-[100%] border-gray-300 border-2 h-[150px] p-4">
            <p>CATEGORIES</p>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Men</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Women</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Kids</span>
              </div>
            </div>
          </div>

          <div className="w-[100%] border-gray-300 border-2 h-[150px] p-4 mt-2">
            <p>TYPE</p>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Topwear</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Bottomwear</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <span>Winterwear</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-14 w-[65%]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-gray-500 text-2xl">ALL</p>
            <p className="font-semibold text-2xl">COLLECTIONS</p>
            <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
          </div>

          <div className="border w-[25%] text-sm h-10 flex items-center px-4 justify-between">
            <span className="text-gray-500">Sort by: Price: <span className="text-gray-700">High To Low</span></span>
            <img src="../src/assets/frontend_assets/dropdown_icon.png" className="w-3 h-5 rotate-90"/>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-y-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

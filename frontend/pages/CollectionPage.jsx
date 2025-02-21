import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SortDropDown from "../components/SortDropDown";
import { getAllProducts } from "../src/api/userApis";
import { ToastContainer, toast } from "react-toastify";
import { toastStyle } from "../src/toastStyle";

const CollectionPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await getAllProducts();
      setAllProducts(response.data);
    } catch (error) {
      console.log("error: ", error);
      // toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Search Bar */}
      {showSearch && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-10 gap-2">
          <input
            type="text"
            placeholder="Search collections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none h-10"
          />
          <button
            onClick={() => setShowSearch(false)}
            className="w-[10%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
          >
            close
          </button>
        </div>
      )}

      <div className="flex gap-2 w-[100%] no-scrollbar mt-14">
        <div className="w-[23%] px-14 mt-14">
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 text-2xl">FILTERS</p>

            <div className="w-[100%] border-gray-300 border-2 h-[150px] p-4">
              <p>CATEGORIES</p>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Men</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Women</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Kids</span>
                </div>
              </div>
            </div>

            <div className="w-[100%] border-gray-300 border-2 h-[150px] p-4 mt-2">
              <p>TYPE</p>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Topwear</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Bottomwear</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  <span>Winterwear</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[65%]">
          {/* Header with Search and Sort */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <p className="text-gray-500 text-2xl">ALL</p>
              <p className="font-semibold text-2xl">COLLECTIONS</p>
              <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
            </div>

            <div className="flex w-[40%] gap-3 items-center">
              <button
                onClick={() => setShowSearch(true)}
                className="w-[30%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
              >
                Search
              </button>
              <SortDropDown
                category={"Sort By: Price"}
                optionsArray={[
                  "Low to High",
                  "High to Low",
                  "High to medium",
                  "Medium to High",
                ]}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-4 flex flex-wrap gap-y-5 gap-8">
            {allProducts.map((element, index) => (
              <ProductCard key={index} product={element} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CollectionPage;

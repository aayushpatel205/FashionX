import React from "react";
import p_img from "../src/assets/frontend_assets/p_img2_1.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to={`/product/${5}`}>
      <div className="flex flex-col gap-2.5" onClick={() => {}}>
        <div className="h-56 w-48">
          <img src={p_img} className="h-[100%] w-[100%] object-fill" />
        </div>
        <div className="w-52">
          <p className="text-gray-700 text-sm">Women Round Neck Cotton Top</p>
          <p className="text-gray-700">$100</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

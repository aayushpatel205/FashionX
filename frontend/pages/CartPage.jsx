import React from "react";
import CartItemDisplay from "../components/CartItemDisplay";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-14 mt-16 flex flex-col gap-6">
      <div className="flex gap-2">
        <p className="text-gray-500 text-2xl">YOUR</p>
        <p className="font-semibold text-2xl">CART</p>
        <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
      </div>

      <CartItemDisplay />
      <CartItemDisplay />
      <CartItemDisplay />
      <CartItemDisplay />

      <div className="self-end mt-10 w-[35%]">
        <div className="flex gap-2">
          <p className="text-gray-500 text-2xl">CART</p>
          <p className="font-semibold text-2xl">TOTALS</p>
          <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
        </div>

        <div className="flex flex-col">
          <div>
            <div className="flex justify-between items-center mt-4 px-2 py-1">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-700">$100</p>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
          </div>

          <div>
            <div className="flex justify-between items-center mt-4 px-2 py-1">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="text-gray-700">$10</p>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
          </div>

          <div>
            <div className="flex justify-between items-center mt-4 px-2 py-1">
              <p className="text-gray-700 font-semibold">Total</p>
              <p className="text-gray-700">$110</p>
            </div>
          </div>

          <button
            className="w-[50%] mt-5 self-end bg-black h-12 text-white text-sm hover:opacity-85"
            onClick={() => navigate("/payment")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

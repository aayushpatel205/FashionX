import React from "react";
import CartItemDisplay from "../components/CartItemDisplay";
import { useLoaderData, useLocation } from "react-router-dom";

const MyOrderPage = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="px-14 mt-16">
      <div className="flex gap-2">
        <p className="text-gray-500 text-2xl">MY</p>
        <p className="font-semibold text-2xl">ORDERS</p>
        <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
      </div>

      <div className="flex flex-col gap-6 mt-8">
        <CartItemDisplay location={path} />
        <CartItemDisplay location={path}/>
        <CartItemDisplay location={path}/>
        <CartItemDisplay location={path}/>
      </div>
    </div>
  );
};

export default MyOrderPage;

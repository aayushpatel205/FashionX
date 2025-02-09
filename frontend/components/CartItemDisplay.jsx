import React from "react";

const CartItemDisplay = ({ location }) => {
  return (
    <div className="border-t-2 border-b-2 border-gray-200 flex justify-between items-center py-3 px-2 ">
      <div className="flex gap-3 items-center">
        <img
          src="../src/assets/frontend_assets/p_img2_1.png"
          className="h-28 w-24"
        />

        {location === "/my-order" ? (
          <div className="flex-col justify-between flex h-25">
            <p className="text-gray-700 font-medium">
              Men Round Neck Cotton Top
            </p>
            <div className="flex gap-3">
              <p className="text-gray-700">$100</p>
              <p className="text-gray-700">Quantity: 1</p>
              <p className="text-gray-700">Size: L</p>
            </div>

            <span className="text-gray-700">
              Date: <span className="text-gray-400">25th May, 2022</span>
            </span>
          </div>
        ) : (
          <div className="flex-col gap-6">
            <div className="flex gap-4 items-center">
              <p className="text-gray-700">$100</p>
              <div className="h-10 w-10 border-2 flex justify-center items-center bg-gray-100 border-gray-200">
                S
              </div>
            </div>
          </div>
        )}
      </div>

      {location === "/my-order" ? (
        <div className="flex gap-3 items-center">
          <div className="h-3 w-3 border border-gray-400 rounded-lg bg-green-600"></div>
          <p className="text-gray-500">Shipped</p>
        </div>
      ) : (
        <div>
          <input
            type="number"
            value="1"
            className="h-8 w-24 px-2 py-2 outline-none border-2 border-gray-200"
          />
        </div>
      )}

      {location === "/my-order" ? (
        <div className="h-10 w-[10%] border-2 border-gray-200 flex justify-center items-center cursor-pointer">
          <p className="text-gray-700">Track Order</p>
        </div>
      ) : (
        <div>
          <img
            src="../src/assets/admin_assets/bin.png"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default CartItemDisplay;

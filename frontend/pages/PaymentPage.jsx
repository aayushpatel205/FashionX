import React from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-14 mt-20 flex justify-between items-center">
      <div className="w-[40%] flex flex-col gap-7">
        <div className="flex gap-2">
          <p className="text-gray-500 text-2xl">DELIVERY</p>
          <p className="font-semibold text-2xl">INFORMATION</p>
          <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
        </div>

        <UserDetails/>
        {/* <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="First Name"
            />
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="Last Name"
            />
          </div>
          <input
            className="w-[100%] border-1 border-gray-200 h-10 px-2 outline-none"
            placeholder="Email Address"
          />
          <input
            className="w-[100%] border-1 border-gray-200 h-10 px-2 outline-none"
            placeholder="Street"
          />

          <div className="flex justify-between">
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="City"
            />
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="State"
            />
          </div>

          <div className="flex justify-between">
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="Zip Code"
            />
            <input
              className="w-[48%] border-1 border-gray-200 h-10 px-2 outline-none"
              placeholder="Country"
            />
          </div>
          <input
            className="w-[100%] border-1 border-gray-200 h-10 px-2 outline-none"
            placeholder="Phone"
          />
        </div> */}
      </div>

      <div className="w-[38%] flex flex-col gap-7">
        <div className="self-end mt-10 w-[100%]">
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
          </div>
        </div>

        <div className="flex-col flex gap-5">
          <div className="flex gap-1 items-center">
            <p className="text-gray-500">PAYMENT</p>
            <p className="font-semibold text-gray-700">METHOD</p>
            <div className="ml-2 w-10 h-[2px] bg-gray-700"></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[30%] border border-gray-200 h-8 px-3 flex items-center gap-8 hover:border-gray-700 cursor-pointer">
              <div className="h-4 w-4 border border-gray-400 rounded-lg bg-green-600"></div>
              <img
                src="../src/assets/admin_assets/stripe-logo-2.png"
                className="h-4"
              />
            </div>

            <div className="w-[30%] border border-gray-200 h-8 px-3 flex items-center gap-6 hover:border-gray-700 cursor-pointer">
              <div className="h-4 w-4 border border-gray-400 rounded-lg"></div>
              <img
                src="../src/assets/admin_assets/razorpay-icon.png"
                className="h-16"
              />
            </div>

            <div className="w-[35%] border border-gray-200 h-8 px-3 flex items-center gap-3 hover:border-gray-700 cursor-pointer">
              <div className="h-4 w-4 border border-gray-400 rounded-lg "></div>
              <span className="text-xs text-gray-700">CASH ON DELIVERY</span>
            </div>
          </div>

          <button
            className="w-[40%] mt-5 self-end bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
            onClick={() => navigate("/my-order")}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

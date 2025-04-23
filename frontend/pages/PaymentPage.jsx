import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import { useProductData } from "../src/Context/ProductDataContext";

const PaymentPage = () => {
  const [paymentOption, setPaymentOption] = useState("UPI");
  const navigate = useNavigate();
  const { totalCost, setTotalCost, userCartData, setUserCartData } =
    useProductData();

  useEffect(() => {
    if (!sessionStorage.getItem("cart")) {
      navigate("/cart");
    }
    setTotalCost(
      JSON.parse(sessionStorage.getItem("cart")).reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      )
    );
  }, []);

  return (
    <div className="px-14 mt-20 flex justify-between items-center">
      <div className="w-[40%] flex flex-col gap-7">
        <div className="flex gap-2">
          <p className="text-gray-500 text-2xl">DELIVERY</p>
          <p className="font-semibold text-2xl">INFORMATION</p>
          <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
        </div>

        <UserDetails />
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
                <p className="text-gray-700">${totalCost}</p>
              </div>
              <div className="h-[1px] bg-gray-200"></div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-4 px-2 py-1">
                <p className="text-gray-500">Shipping Fee</p>
                <p className="text-gray-700">${(0.3 * totalCost).toFixed(2)}</p>
              </div>
              <div className="h-[1px] bg-gray-200"></div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-4 px-2 py-1">
                <p className="text-gray-700 font-semibold">Total</p>
                <p className="text-gray-700">
                  ${(totalCost + 0.3 * totalCost).toFixed(2)}
                </p>
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

          <div className="flex gap-5 w-[50%]">
            <div className="flex gap-5 items-center">
              <div
                onClick={() => setPaymentOption("UPI")}
                className="border border-gray-200 h-8 px-3 flex items-center gap-3 cursor-pointer hover:border-black"
              >
                <div
                  className={`h-4 w-4 rounded-lg ${
                    paymentOption === "UPI"
                      ? "bg-green-500"
                      : "border-2 border-gray-200"
                  }`}
                ></div>
                <span className="text-sm text-gray-700">UPI</span>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div
                onClick={() => setPaymentOption("Card")}
                className="border border-gray-200 h-8 px-3 flex items-center gap-3 cursor-pointer hover:border-black"
              >
                <div
                  className={`h-4 w-4 rounded-lg ${
                    paymentOption === "Card"
                      ? "bg-green-500"
                      : "border-2 border-gray-200"
                  }`}
                ></div>
                <span className="text-sm text-gray-700">Card</span>
              </div>
            </div>
          </div>

          <button
            className="w-[40%] mt-5 self-end bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
            onClick={() => {
              if (totalCost > 0) {
                navigate("/payment/success");
              }
            }}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

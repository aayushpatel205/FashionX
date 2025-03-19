import React from "react";
import logisticsImg from "../src/assets/admin_assets/logistics.png";
import SortDropDown from "./SortDropDown";

const AdminOrdersViewPage = () => {
  const orderStatusArray = [
    "Order Placed",
    "Packing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];
  return (
    <div className="flex flex-col gap-3 border-l-1 pl-10 border-gray-400 py-4">
      <p className="text-xl text-gray-400 font-medium">Orders Page</p>

      <div className="w-[88%] border-2 border-gray-200 p-5 flex gap-5 items-start my-2">
        <div className="h-14 w-14 border-2 border-gray-200 flex justify-center items-center ">
          <img
            src="../src/assets/admin_assets/logistics.png"
            className="h-11 w-11"
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 S
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 M
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 XL
          </p>

          <p className="text-gray-500 font-semibold my-4">Avinash Kumar</p>

          <p className="text-gray-500">Some Street</p>
          <p className="text-gray-500">Bangalore , Karnataka , 213455</p>
          <p className="text-gray-500">1234567890</p>
        </div>
        <div className="ml-8 my-2">
          <p className="text-gray-500">Items: 3</p>

          <div className="mt-5 flex flex-col gap-1">
            <p className="text-gray-500">Method: COD</p>
            <p className="text-gray-500">Payment: Pending</p>
            <p className="text-gray-500">Date: 8/16/24</p>
          </div>
        </div>
        <div className="mx-7 my-2">
          <p className="text-gray-500">$304</p>
        </div>
        <SortDropDown
          category={"Order Status"}
          optionsArray={orderStatusArray}
          width={true}
        />
      </div>

      <div className="w-[88%] border-2 border-gray-200 p-5 flex gap-5 items-start my-2">
        <div className="h-14 w-14 border-2 border-gray-200 flex justify-center items-center ">
          <img
            src="../src/assets/admin_assets/logistics.png"
            className="h-11 w-11"
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 S
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 M
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 XL
          </p>

          <p className="text-gray-500 font-semibold my-4">Avinash Kumar</p>

          <p className="text-gray-500">Some Street</p>
          <p className="text-gray-500">Bangalore , Karnataka , 213455</p>
          <p className="text-gray-500">1234567890</p>
        </div>
        <div className="ml-8 my-2">
          <p className="text-gray-500">Items: 3</p>

          <div className="mt-5 flex flex-col gap-1">
            <p className="text-gray-500">Method: COD</p>
            <p className="text-gray-500">Payment: Pending</p>
            <p className="text-gray-500">Date: 8/16/24</p>
          </div>
        </div>
        <div className="mx-7 my-2">
          <p className="text-gray-500">$304</p>
        </div>
        <SortDropDown
          category={"Order Status"}
          optionsArray={orderStatusArray}
          width={true}
        />
      </div>

      <div className="w-[88%] border-2 border-gray-200 p-5 flex gap-5 items-start my-2">
        <div className="h-14 w-14 border-2 border-gray-200 flex justify-center items-center ">
          <img
            src="../src/assets/admin_assets/logistics.png"
            className="h-11 w-11"
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 S
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 M
          </p>
          <p className="text-gray-500">
            Men Round Neck Pure Cotton Tshirt x 1 XL
          </p>

          <p className="text-gray-500 font-semibold my-4">Avinash Kumar</p>

          <p className="text-gray-500">Some Street</p>
          <p className="text-gray-500">Bangalore , Karnataka , 213455</p>
          <p className="text-gray-500">1234567890</p>
        </div>
        <div className="ml-8 my-2">
          <p className="text-gray-500">Items: 3</p>

          <div className="mt-5 flex flex-col gap-1">
            <p className="text-gray-500">Method: COD</p>
            <p className="text-gray-500">Payment: Pending</p>
            <p className="text-gray-500">Date: 8/16/24</p>
          </div>
        </div>
        <div className="mx-7 my-2">
          <p className="text-gray-500">$304</p>
        </div>
        <SortDropDown
          category={"Order Status"}
          optionsArray={orderStatusArray}
          width={true}
        />
      </div>

      
    </div>
  );
};

export default AdminOrdersViewPage;

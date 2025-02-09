import React from "react";

const RewardTaskCard = ({ noOfPurchases }) => {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="h-20 w-[30%] px-5 py-2 flex-col flex gap-2 shadow-lg relative">
        <p className="text-xl font-medium text-gray-700 px-3">
          Make a total of 10 purchases
        </p>
        <div className="flex gap-3 items-center w-[95%] pl-3">
          <div
            className={`w-[${
              (noOfPurchases / 10) * 100
            }%] h-2 border rounded-lg bg-black`}
          ></div>
          <p className="text-xl">{noOfPurchases}</p>
          {noOfPurchases === 10 && (
            <img
              src="../src/assets/admin_assets/checked.png"
              className="h-6 w-6"
            />
          )}
        </div>
      </div>

      {noOfPurchases === 10 && (
        <button className="absolute right-[23%] w-[10%] mt-5 bg-black h-12 text-white text-sm hover:opacity-85 cursor-pointer">
          CLAIM REWARD
        </button>
      )}
    </div>
  );
};

export default RewardTaskCard;

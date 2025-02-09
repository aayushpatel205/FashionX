import React from "react";
import RewardTaskCard from "../components/RewardTaskCard";

const RewardsPage = () => {
  const noOfPurchasesArray = [8, 9, 10, 2, 5, 10];

  return (
    <div className="mt-12 flex flex-col items-center gap-7">
      <div className="flex gap-2">
        <p className="text-gray-500 text-2xl">YOUR</p>
        <p className="font-semibold text-2xl">REWARDS</p>
        <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
      </div>

      <div className="w-[100%] flex flex-col items-center gap-10">
        {/* Reward Cards below !! */}

        {noOfPurchasesArray.map((element, index) => {
          return <RewardTaskCard noOfPurchases={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RewardsPage;

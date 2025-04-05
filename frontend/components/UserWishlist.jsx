import React, { useEffect, useState } from "react";
import hero_img from "../src/assets/frontend_assets/hero_img.png";
import { getUserDetails } from "../src/api/userApis";
import { useUserData } from "../src/Context/UserDataContext";

const UserWishlist = () => {
  const [userWishlist, setUserWishlist] = useState([]);
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const getWishlistData = async () => {
    const category = "wishlist";
    const response = await getUserDetails(userData?.data.id, category);
    console.log("wishlist: ", response?.data);
    setUserWishlist(response?.data.userWishlist);
  };
  useEffect(() => {
    getWishlistData();
  }, []);
  return (
    <div className="w-full h-[70vh] overflow-y-auto">
      {" "}
      {/* Set a fixed height and enable scrolling */}
      <div className="flex flex-col gap-5">
        {userWishlist?.map((element, index) => {
          return (
            <div
              key={index}
              className="flex py-2 border border-gray-400 items-center"
            >
              <img
                className="h-14 w-14 ml-4"
                src={element?.imgUrl}
                alt="Product"
              />
              <p className="w-[50%] ml-[10%] pr-2">{element?.productName}</p>
              <p className="w-[15%]">{element?.category}</p>
              <p className="w-[10%]">${element?.price}</p>
              <button
                className="w-[15%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer mr-4"
              >
                remove 
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserWishlist;

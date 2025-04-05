import React, { useState } from "react";
import { userLogout } from "../src/api/userApis";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import UserDetails from "../components/UserDetails";
import { useUserData } from "../src/Context/UserDataContext";
import UserPreferences from "../components/UserPreferences";
import UserWishlist from "../components/UserWishlist";

const ProfilePage = () => {
  const { userData } = useUserData();
  const renderComponents = {
    "user-details": <UserDetails />,
    "preferences": <UserPreferences />,
    "wishlist": <UserWishlist/>
  };
  const [activeComponent, setActiveComponent] = useState("user-details");
  const navigate = useNavigate();
  return (
    <div className="flex w-[100%] gap-7">
      <div className="flex flex-col gap-5 ml-20 justify-center items-center w-[35%] mt-10 border-r">
        <div className="h-[110px] w-[110px] rounded-full mt-5 flex justify-center items-center bg-gray-300">
          <img
            src="../src/assets/admin_assets/profile-candidate.png"
            className="h-[60%] w-[60%] cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-medium">{userData?.data.name}</p>
        </div>
        <button
          onClick={async () => {
            try {
              const response = await userLogout();
              navigate("/");
              toast.success(response.data.message);
            } catch (error) {
              console.log(error);
            }
          }}
          className="w-[30%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
        >
          Logout
        </button>
        <div className="w-[100%] flex flex-col items-center gap-3">
          <div
            className={`h-10 w-[55%] border border-gray-400 px-3 flex gap-10 items-center bg-white hover:border-2 cursor-pointer`}
            // onClick={() => setActivePage("Add Items")}
          >
            <img
              src="../../src/assets/admin_assets/plus.png"
              className="h-6 w-6"
            />
            <p className="font-medium">My Orders</p>
          </div>

          <div
            className={`h-10 w-[55%] border border-gray-400 px-3 flex gap-10 items-center bg-white hover:border-2 cursor-pointer ${
              activeComponent === "wishlist" && "invert"
            }`}
            onClick={() => setActiveComponent("wishlist")}
          >
            <img
              src="../../src/assets/admin_assets/plus.png"
              className="h-6 w-6"
            />
            <p className="font-medium">Wishlist</p>
          </div>

          <div
            className={`h-10 w-[55%] border border-gray-400 px-3 flex gap-10 items-center bg-white hover:border-2 cursor-pointer ${
              activeComponent === "user-details" && "invert"
            }`}
            onClick={() => setActiveComponent("user-details")}
          >
            <img
              src="../../src/assets/admin_assets/plus.png"
              className="h-6 w-6"
            />
            <p className="font-medium">Personal Details</p>
          </div>

          <div
             className={`h-10 w-[55%] border border-gray-400 px-3 flex gap-10 items-center bg-white hover:border-2 cursor-pointer ${
              activeComponent === "preferences" && "invert"
            }`}
            onClick={() => setActiveComponent("preferences")}
          >
            <img
              src="../../src/assets/admin_assets/plus.png"
              className="h-6 w-6"
            />
            <p className="font-medium">Preferences</p>
          </div>
        </div>
      </div>

      <div className="w-[60%] mt-15 flex flex-col justify-center py-10 pl-10 gap-5">
        {/* <div className="flex gap-2">
          <p className="text-gray-500 text-2xl uppercase">personal</p>
          <p className="font-semibold text-2xl uppercase">details</p>
          <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
        </div> */}

        {renderComponents[activeComponent]}

        {/* <div className="flex flex-col gap-5 py-10 w-[70%]">
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
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;

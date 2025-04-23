import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductData } from "../src/Context/ProductDataContext";
import axiosInstance from "../axiosInstance";
import { useUserData } from "../src/Context/UserDataContext";
import { ToastContainer, toast } from "react-toastify";
import { getUserDetails } from "../src/api/userApis";
import savedImg from "../src/assets/frontend_assets/save-light.png";
import SortDropDown from "./SortDropDown";
const Navbar = () => {
  const { userData, setUserData } = useUserData();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [savedPageOpen, setSavedPageOpen] = useState(false);
  const path = location.pathname;
  const { userCartData } = useProductData();
  const [userCartLength, setUserCartLength] = useState(userCartData?.length);

  useEffect(() => {
    console.log("HIEIUVQIIQ");
    console.log(userData);
    verifyUser();
    setUserCartLength(
      JSON.parse(sessionStorage.getItem("cart"))
        ? JSON.parse(sessionStorage.getItem("cart")).length
        : 0
    );
  }, []);

  const verifyUser = async () => {
    try {
      const response = await axiosInstance.get("user/auth/verify");
      const res = await getUserDetails(
        response.data.user.id,
        "profile-picture"
      );
      setUserData({
        isVerified: true,
        data: {
          name: response.data.user.name,
          email: response.data.user.email,
          id: response.data.user.id,
        },
        profilePicture: res?.data.userProfilePicture,
      });
    } catch (error) {
      setUserData({ ...userData, isVerified: false });
      return error;
    }
  };
  return (
    <>
      <div className={`h-20 px-8 flex justify-between items-center w-[100%]`}>
        <Link to={"/"}>
          {" "}
          <p className="text-4xl font-medium cursor-pointer">
            Fashion<span className="text-gray-600 font-extralight">X</span>
          </p>
        </Link>
        <div className="flex justify-between w-[30%] items-center relative">
          <Link to="/">
            <p
              className={`cursor-pointer text-black bg-white py-1 ${
                path === "/" ? "invert px-2" : ""
              }`}
            >
              HOME
            </p>
          </Link>

          <Link to="/collections">
            <p
              className={`cursor-pointer text-black bg-white py-1 ${
                path === "/collections" ? "invert px-2" : ""
              }`}
            >
              COLLECTION
            </p>
          </Link>

          <Link to="/about-us">
            <p
              className={`cursor-pointer text-black bg-white py-1 ${
                path === "/about-us" ? "invert px-2" : ""
              }`}
            >
              ABOUT
            </p>
          </Link>

          {/* Dropdown menu */}
          <div
            className="relative group"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <p className="cursor-pointer text-black bg-white py-1 px-2 transition duration-300">
              USER
            </p>
            <div
              className={`absolute mt-1 py-2 w-32 shadow-lg z-100 bg-white ${
                isDropDownOpen ? "flex flex-col" : "hidden"
              }`}
            >
              <Link
                to="/user-profile"
                className="px-4 py-2 hover:bg-black hover:text-white transition duration-300"
              >
                Profile
              </Link>
              <Link
                to="/my-order"
                className="px-4 py-2 hover:bg-black hover:text-white transition duration-300"
              >
                Orders
              </Link>
              <Link
                to="/logout"
                className="px-4 py-2 hover:bg-black hover:text-white transition duration-300"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-[20%] gap-5">
          <Link
            to={"/user-wishlist"}
            onClick={() => setSavedPageOpen(!savedPageOpen)}
          >
            <div className="relative mt-1">
              <img
                src={
                  savedPageOpen
                    ? "../src/assets/frontend_assets/save-light.png"
                    : "../src/assets/frontend_assets/save-dark.png"
                }
                className="h-6 w-6 cursor-pointer"
              />
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <img
                src="../src/assets/admin_assets/shopping-bag.png"
                className="h-8 w-8 cursor-pointer"
              />
              {path !== "/cart" && (
                <p className="bg-black text-white text-sm w-4 h-4 rounded-full flex justify-center items-center absolute right-0 top-[19px]">
                  {userCartLength}
                </p>
              )}
            </div>
          </Link>

          <div className="pt-1 flex gap-3 items-center">
            <Link
              to="/user-profile"
              className={`${
                userData?.profilePicture
                  ? ""
                  : "p-2 border rounded-full border-gray-400"
              }`}
            >
              <img
                src={
                  userData.profilePicture
                    ? userData.profilePicture
                    : "../src/assets/admin_assets/profile-candidate.png"
                }
                className={`cursor-pointer ${
                  userData?.profilePicture
                    ? "h-8 w-8 rounded-full"
                    : "h-[22px] w-[24px]"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
            </Link>
          </div>

          {!userData?.isVerified && (
            <button
              onClick={() => navigate("/login")}
              className="w-[45%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
            >
              login
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;

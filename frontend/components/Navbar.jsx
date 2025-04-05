import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductData } from "../src/Context/ProductDataContext";
import axiosInstance from "../axiosInstance";
import { useUserData } from "../src/Context/UserDataContext";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const { userData, setUserData } = useUserData();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const path = location.pathname;
  const { userCartData } = useProductData();

  useEffect(() => {
    console.log("The user data is: ", userData);
    verifyUser();
  }, []);


  const verifyUser = async () => {
    try {
      const response = await axiosInstance.get("user/auth/verify");
      setUserData({
        isVerified: true,
        data: {
          name: response.data.user.name,
          email: response.data.user.email,
          id: response.data.user.id,
        },
      });
      console.log(response);
    } catch (error) {
      setUserData({ ...userData, isVerified: false });
      return error;
    }
  };
  return (
    <>
      <div className={`h-20 px-8 flex justify-between items-center w[100%]`}>
        <Link to={"/"}>
          {" "}
          <p className="text-4xl font-medium cursor-pointer">
            Fashion<span className="text-gray-600 font-extralight">X</span>
          </p>
        </Link>
        <div className="flex gap-10">
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

          <Link to={"/about-us"}>
            <p
              className={` cursor-pointer text-black bg-white py-1 ${
                path === "/about-us" ? "invert px-2" : ""
              }`}
            >
              ABOUT
            </p>
          </Link>
          <Link to={"/rewards"}>
            <p
              className={` cursor-pointer text-black bg-white py-1 ${
                path === "/rewards" ? "invert px-2" : ""
              }`}
            >
              REWARDS
            </p>
          </Link>
        </div>
        <div className="flex justify-end items-center w-[15%] gap-5">
          <Link to={"/cart"}>
            <div
              className="relative"
              onClick={() => {
                if (!user.isVerified) {
                  toast("Please login to view your cart");
                }
              }}
            >
              <img
                src="../src/assets/admin_assets/shopping-bag.png"
                className="h-7 w-7 cursor-pointer"
              />
              {path !== "/cart" && (
                <p className="bg-black text-white text-sm w-4 h-4 rounded-full flex justify-center items-center absolute right-0 top-[16px]">
                  {userCartData?.length}
                </p>
              )}
            </div>
          </Link>

          <div className="pt-1 flex gap-3 items-center">
            <Link to="/user-profile">
              <img
                src="../src/assets/admin_assets/profile-candidate.png"
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </Link>
            {userData?.isVerified && (
              <div className="h-8 border-gray-200 border-2 px-2 min-w-fit">
                <p className="text-lg font-semibold min-w-fit">
                  <span className="font-light">Hii,</span> {userData?.data.name}
                </p>
              </div>
            )}
          </div>

          {!userData?.isVerified && (
            <button
              onClick={() => navigate("/login")}
              className="w-[55%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
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

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductData } from "../src/Context/ProductDataContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const path = location.pathname;
  const { userCartData } = useProductData();
  return (
    <div className={`h-20 px-14 flex justify-between items-center w[100%]`}>
      <Link to={"/"}>
        {" "}
        <p className="text-4xl font-medium cursor-pointer">
          Fashion<span className="text-gray-600 font-extralight">X</span>
        </p>
      </Link>
      <div className="flex gap-10">
        <Link to="/">
          <p className="hover:underline underline-offset-4 cursor-pointer">
            HOME
          </p>
        </Link>

        <Link to="/collections">
          <p className="hover:underline underline-offset-4 cursor-pointer">
            COLLECTION
          </p>
        </Link>

        <Link to={"/about-us"}>
          <p className="hover:underline underline-offset-4 cursor-pointer">
            ABOUT
          </p>
        </Link>
        <Link to={"/rewards"}>
          <p className="hover:underline underline-offset-4 cursor-pointer">
            REWARDS
          </p>
        </Link>
      </div>
      <div className="flex justify-between items-center w-[15%]">
        <div>
          <img
            src="../src/assets/admin_assets/profile-candidate.png"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <Link to={"/cart"}>
          <div className="relative">
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
        <button
          onClick={() => navigate("/login")}
          className="w-[55%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

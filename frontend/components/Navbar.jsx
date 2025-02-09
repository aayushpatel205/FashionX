import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const path = location.pathname;
  console.log("location: ", location.pathname);
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
      <div className="flex gap-7 items-center">
        <img
          src="../src/assets/admin_assets/search-interface-symbol.png"
          className="h-6 w-6 cursor-pointer"
        />

        <div className="flex flex-col">
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
                2
              </p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

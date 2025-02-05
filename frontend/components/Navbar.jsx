import React from "react";
import { Link , useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log("location: ",location.pathname);
  return (
    <div className={`h-20 px-10 flex justify-between items-center w[100%]`}>
      <p className="text-4xl font-medium">
        Fashion<span className="text-gray-600 font-extralight">X</span>
      </p>

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

        <p className="hover:underline underline-offset-4 cursor-pointer">
          ABOUT
        </p>
        <p className="hover:underline underline-offset-4 cursor-pointer">
          CONTACT
        </p>
      </div>

      <div>
        {/* <img
          src="./navbar/bag.png"
          className="h-11 black w-11"
          style={{ height: 20, width: 20 }}
        /> */}
      </div>
    </div>
  );
};

export default Navbar;

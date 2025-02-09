import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <img src="../src/assets/admin_assets/login.svg" />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Email"
        />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Password"
        />

        <div className="flex justify-between w-[85%]">
          <p className="text-gray-700 text-sm cursor-pointer">
            Forgot Password?
          </p>
          <Link to={"/sign-up"}>
            <p className="text-gray-700 text-sm cursor-pointer">
              Create account
            </p>
          </Link>
        </div>

        <button className="w-[85%] mt-5 uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer">
          login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

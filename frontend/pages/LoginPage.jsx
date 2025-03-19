import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userLogin } from "../src/api/userApis";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <img src="../src/assets/admin_assets/login.svg" />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
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

        <button
          className="w-[85%] mt-5 uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
          onClick={async () => {
            try {
              if (!emailRegex.test(userDetails.email)) {
                toast.error("Please enter a valid email address");
                setUserDetails({ email: "", password: "" });
                return;
              }
              const response = await userLogin(
                userDetails.email,
                userDetails.password
              );
              console.log("response is: ", response);
            } catch (error) {
              console.log("error is: ", error.response.data.message);
              toast.error(error.response.data.message);
            }
          }}
        >
          login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

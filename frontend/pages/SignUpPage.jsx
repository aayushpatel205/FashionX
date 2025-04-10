import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userSignUp } from "../src/api/userApis";
import { toast, ToastContainer } from "react-toastify";
import eyeImg from "../src/assets/frontend_assets/view.png";
import { toastStyle } from "../src/toastStyle";
const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const path = isPasswordVisible ? "../src/assets/frontend_assets/view.png" : "../src/assets/frontend_assets/hide.png";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <img src="../src/assets/admin_assets/sign-up.svg" />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Name"
          min={4}
          max={10}
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
        />
        <input
          className="w-[85%] border border-gray-700 h-10 px-2 outline-none"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        {
          // Password Field !!! below  
        }
        <div className="w-[85%] border border-gray-700 px-2 flex justify-between items-center">
          <input
            className="w-[87%] outline-none h-10"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <img src={path} className="h-6 w-6 cursor-pointer" onClick={()=>setIsPasswordVisible(!isPasswordVisible)} />
        </div>

        <div className="flex justify-between w-[85%]">
          <Link to={"/login"}>
            <p className="text-gray-700 text-sm cursor-pointer">
              Already have account?
            </p>
          </Link>
        </div>

        <button
          className="w-[85%] uppercase mt-5 bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
          onClick={async () => {
            try {
              if (
                !userDetails.name ||
                !userDetails.email ||
                !userDetails.password
              )
                return toast.error("Please fill all the fields");

              if (!emailRegex.test(userDetails.email)) {
                toast.error("Please enter a valid email address");
                setUserDetails({ name: "", email: "", password: "" });
                return;
              }
              const response = await userSignUp(
                userDetails.name,
                userDetails.email,
                userDetails.password
              );
              setUserDetails({ name: "", email: "", password: "" });
            } catch (error) {
              console.log("The error is: ", error.response.data.message);
            }
          }}
        >
          Sign up
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;

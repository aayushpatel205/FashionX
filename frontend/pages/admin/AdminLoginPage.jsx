import React from "react";

const AdminLoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[340px] w-[25%] shadow-md mt-[100px] rounded-lg p-8 flex flex-col gap-4">
        <p className="text-4xl font-semibold">Admin Panel</p>
        <div className="flex flex-col gap-1">
          <p className="text-gray-700">Email Address</p>
          <input className="w-[100%] border-2 border-gray-200 h-10 px-2 outline-none" type="email"/>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-700">Password</p>
          <input className="w-[100%] border-2 border-gray-200 h-10 px-2 outline-none" type="password"/>
        </div>
        <button
          className="w-[100%] uppercase bg-black h-10 text-white text-sm hover:opacity-85 cursor-pointer"
        >login</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;

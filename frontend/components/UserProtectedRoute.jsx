import React, { useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const verifyUser = async()=>{
        try {
            console.log("HIIIIIII")
            const response = await axiosInstance.get("user/auth/verify");
            console.log(response);
        } catch (error) {
            navigate("/login");
        }
    }

    useEffect(()=>{
        verifyUser();
    },[])
  return <div>{children}</div>;
};

export default UserProtectedRoute;

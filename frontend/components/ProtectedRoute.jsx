import React, { useEffect } from 'react'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom';
import AdminLoginPage from '../pages/admin/AdminLoginPage';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();

  const verifyAdmin = async()=>{
    try {
      const response = await axiosInstance.get("http://localhost:8000/admin/auth/verify");
    } catch (error) {
      navigate("/admin");
    }
  }
  useEffect(()=>{
    verifyAdmin();
  },[])

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute
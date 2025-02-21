import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Replace with your backend URL
  withCredentials: true, // Ensures cookies are sent with requests
});

export default axiosInstance;

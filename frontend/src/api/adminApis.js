import axiosInstance from "../../axiosInstance";

export const adminLogin = async (username, password) => {
  try {
    const response = await axiosInstance.post("/admin/login", { username, password });
  } catch (error) {
    throw error;
  }
};


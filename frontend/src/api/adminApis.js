import axiosInstance from "../../axiosInstance";

export const adminLogin = async (username, password) => {
  try {
    const response = await axiosInstance.post("/admin/login", { username, password });
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axiosInstance.post("/admin/add-product", product);
    return response.data;
  } catch (error) {
    throw error;
  }
}
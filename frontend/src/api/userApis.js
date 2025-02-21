import axios from "axios";
import axiosInstance from "../../axiosInstance";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/user/get-all-products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/get-by-id`, {
      params: {
        id,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

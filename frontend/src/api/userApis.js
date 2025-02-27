import axios from "axios";
import axiosInstance from "../../axiosInstance";

export const getAllProducts = async (sort) => {
  try {
    const response = await axiosInstance.get("/user/get-all-products",{
      params: {
        sort
      }
    });
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

export const getProductByCategory = async (category, subCategory,sort) => {
  try {
    const response = await axiosInstance.get(`/user/get-by-category`, {
      params: {
        category,
        subCategory,
        sort
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
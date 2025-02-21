import axios from "axios";

const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

console.log(UPLOAD_PRESET, CLOUD_NAME);

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("cloud_name", CLOUD_NAME);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    throw error;
  }
};

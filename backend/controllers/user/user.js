import Product from "../../models/Product.js";
export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    return res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findById(req.query.id);
    return res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

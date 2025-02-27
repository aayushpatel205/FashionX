import Product from "../../models/Product.js";
export const getAllProducts = async (req, res) => {
  const { sort } = req.query;
  try {
    const data = await Product.find().sort({ price: sort });
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

export const getProductByCategory = async (req, res) => {
  try {
    const { category, subCategory , sort } = req.query;

    const categoryArray = category && category.split(",");
    const subCategoryArray = subCategory && subCategory.split(",");
    const newQuery = {};

    if (categoryArray) {
      newQuery.category = { $in: categoryArray };
    }
    if(subCategoryArray){
      newQuery.subCategory = { $in: subCategoryArray };
    }
    const data = await Product.find(newQuery).sort({ price: sort });
    return res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

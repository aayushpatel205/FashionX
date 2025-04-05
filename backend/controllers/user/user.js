import Product from "../../models/Product.js";
import Fuse from "fuse.js";
import User from "../../models/User.js";
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
    const { category, subCategory, sort } = req.query;

    const categoryArray = category && category.split(",");
    const subCategoryArray = subCategory && subCategory.split(",");
    const newQuery = {};

    if (categoryArray) {
      newQuery.category = { $in: categoryArray };
    }
    if (subCategoryArray) {
      newQuery.subCategory = { $in: subCategoryArray };
    }
    const data = await Product.find(newQuery).sort({ price: sort });
    return res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductBySearch = async (req, res) => {
  const { search } = req.query;
  const allProducts = await Product.find({});
  if(!search){
    return res.status(200).json({ message: "Data fetched successfully", data: allProducts });
  };
  
  const options = {
    keys: ["productName", "productDescription"],
    threshold: 0.5,
    includeScore: true,
  };

  const fuse = new Fuse(allProducts, options);
  const result = fuse.search(search);

  return res
    .status(200)
    .json({ message: "Data fetched successfully", data: result });
};

export const updateUserDetails = async (req, res) => {
  const { isWishlist, user_id, product } = req.body;
  console.log("Product is: ", product);
  try {
    let updatedUser;
    if (isWishlist) {
      updatedUser = await User.findOneAndUpdate(
        { _id: user_id },
        { $addToSet: { wishlist: { 
          _id: product._id, 
          productName: product.productName, 
          imgUrl: product.imgUrl,
          category: product.category,
          price: product.price,
          addedAt: new Date() 
        } } },
        { new: true }
      );
    }

    return res.status(200).json({ 
      message: "Wishlist updated successfully", 
      user: updatedUser 
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteFromWishlist = async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user_id },
      { $pull: { wishlist: { _id: product_id } } },
      { new: true }
    );
    return res.status(200).json({ message: "Wishlist updated successfully", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};


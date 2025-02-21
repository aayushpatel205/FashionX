import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please provide product name"],
  },
  imgUrl: {
    type: String,
    required: [true, "Please provide the url of the image"],
  },
  productDescription: {
    type: String,
    required: [true, "Please provide product description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product base price"],
  },
  discounted_price: {
    type: Number,
  },
  units_sold: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["Men", "Women", "Kids"], // Allowed values
    required: true,
  },
  subCategory: {
    type: String,
    enum: ["Topwear", "Bottomwear", "Winterwear"], // Allowed values
    required: true,
  },
  size: {
    type: [String], // Explicitly define as an array of strings
    default: ["S", "M", "L", "XL", "XXL"], // Default sizes
  },
  deliveryTime: {
    type: String,
    enum: ["1 Day", "2 Days", "3-5 Days", "7 Days"],
    required: [true, "Please provide product delivery time"],
  },
  stock: {
    type: Number,
    required: true,
    default: 100,
  },
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      review: { type: String },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
export default Product;

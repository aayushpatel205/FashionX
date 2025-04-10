import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // Store plain or hashed password
const JWT_SECRET = process.env.JWT_SECRET;

export const adminLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please enter username and password" });
  }

  if (
    username === ADMIN_EMAIL &&
    bcrypt.compareSync(password, ADMIN_PASSWORD)
  ) {
    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
      expiresIn: "2h",
    });
    res.cookie("token", token, {
      httpOnly: false, // Prevents JavaScript access
      secure: false, // Set to true if using HTTPS
      maxAge: 2 * 60 * 60 * 1000, // 2 hours // Restrict the cookie to admin routes only
    });

    return res.json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

export const addProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    price,
    category,
    subCategory,
    imgUrl,
    deliveryTime,
  } = req.body;

  if (
    !productName ||
    !productDescription ||
    !price ||
    !category ||
    !subCategory ||
    !imgUrl
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  try {
    // Create a new product instance
    const newProduct = new Product({
      productName,
      productDescription,
      price,
      category,
      subCategory,
      imgUrl,
      deliveryTime,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
      error: error.message,
    });
  }
};

export const adminLogout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
    // Clear specific cookie
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.status(200).json({ message: "Logout successful" });
};

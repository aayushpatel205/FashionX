import express from "express";
import {
  deleteFromWishlist,
  getAllProducts,
  getProductByCategory,
  getProductById,
  getProductBySearch,
  updateUserDetails
} from "../../controllers/user/user.js";
import { userLogin, userSignUp , userLogout , updateUserPersonalDetails, getUserDetails } from "../../controllers/user/userAuth.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { verifyUser } from "../../middlewares/userVerifyMiddleware.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

router.get("/get-all-products", getAllProducts);
router.get("/get-by-id", getProductById);
router.get("/get-by-category", getProductByCategory);
router.get("/get-by-search", getProductBySearch);

router.post("/sign-up", userSignUp);
router.get("/auth/verify", verifyUser, (req, res) => {
  return res.status(200).json({ message: "User verified successfully" , user: req.user});
});
router.post("/login",userLogin);
router.delete("/login",userLogout);
router.patch("/update/personal-details",updateUserPersonalDetails);
router.patch("/update/details", updateUserDetails);
router.get("/details", getUserDetails);

router.delete("/update/delete-wishlist",deleteFromWishlist);


export default router;

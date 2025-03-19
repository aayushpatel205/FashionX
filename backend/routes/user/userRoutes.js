import express from "express";
import {
  getAllProducts,
  getProductByCategory,
  getProductById,
} from "../../controllers/user/user.js";
import { userLogin, userSignUp } from "../../controllers/user/userAuth.js";
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

router.post("/sign-up", userSignUp);
router.get("/auth/verify", verifyUser, (req, res) => {
  return res.status(200).json({ message: "User verified successfully" , user: req.user});
});
router.post("/login",userLogin);

export default router;

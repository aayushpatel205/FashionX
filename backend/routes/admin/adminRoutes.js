import express from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { verifyAdmin } from "../../middlewares/adminVerifyMiddleware.js";
import { adminLogin } from "../../controllers/admin/admin.js";

dotenv.config();

const router = express.Router();


router.post("/login", adminLogin);

router.get("/auth/verify", verifyAdmin, (req, res) => {
  return res.status(200).json({ isAdmin: true});
});

export default router;

import express from "express";
import { getAllProducts, getProductByCategory, getProductById } from "../../controllers/user/user.js";

const router = express.Router();

router.get("/get-all-products",getAllProducts);
router.get("/get-by-id",getProductById);
router.get("/get-by-category",getProductByCategory);

export default router;
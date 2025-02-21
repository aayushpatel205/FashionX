import express from "express";
import { getAllProducts, getProductById } from "../../controllers/user/user.js";

const router = express.Router();

router.get("/get-all-products",getAllProducts);
router.get("/get-by-id",getProductById);

export default router;
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDatabase from "./database/connect.js";
import adminRoutes from "./routes/admin/adminRoutes.js";
import userRoutes from "./routes/user/userRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import { comparePwd } from "./storePassword.js";
import jwt from "jsonwebtoken";

const PORT = 8002;
const app = express();

const corsOptions = {
  origin: "http://localhost:5175",
  credentials: true, // This allows cookies to be sent
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectDatabase();

app.use("/admin", adminRoutes);
app.use("/user",userRoutes);
app.use("/payment",paymentRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDatabase from "./database/connect.js";
import adminRoutes from "./routes/admin/adminRoutes.js";
import { comparePwd } from "./storePassword.js";
import jwt from "jsonwebtoken";

const PORT = 5000;
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // This allows cookies to be sent
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectDatabase();

app.use("/admin", adminRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

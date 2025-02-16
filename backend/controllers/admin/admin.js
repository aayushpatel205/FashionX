import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: false, // Prevents client-side JavaScript from accessing it
      secure: false, // Ensures the cookie is sent only over HTTPS
      maxAge: 100 * 1000, // 10 seconds currently !!
    });
    return res.json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

import User from "../../models/User.js";
import bcrypt from "bcryptjs";
export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const searchedUser = await User.findOne({
      $or: [{ email: email }, { name: name }],
    });

    if (searchedUser && searchedUser.email === email)
      return res.status(400).json({
        message: "User with this email already exists"
      });
    else if (searchedUser && searchedUser.name === name)
      return res.status(400).json({
        message: "User with this name already exists"
      });

    // Generate Hashed Password for the User and storing the hashed password in the database !!

    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed: ", hashedPassword);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const searchedUser = await User.findOne({ email: email });

  if (!searchedUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, searchedUser?.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ email, role: "user" }, JWT_SECRET, {
    expiresIn: "2h",
  });

  res.cookie("user", token, {
    httpOnly: false, // Prevents JavaScript access
    secure: false, // Set to true if using HTTPS
    maxAge: 2 * 60 * 60 * 1000, // 2 hours // Restrict the cookie to admin routes only
  });

  return res.status(200).json({
    message: "User logged in successfully",
    user: { email, password, token },
  });
};

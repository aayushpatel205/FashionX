import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
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
        message: "User with this email already exists",
      });
    else if (searchedUser && searchedUser.name === name)
      return res.status(400).json({
        message: "User with this name already exists",
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

  const token = jwt.sign(
    { email, id: searchedUser._id, name: searchedUser.name, role: "user" },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  res.cookie("user", token, {
    httpOnly: false, // Prevents JavaScript access
    secure: false, // Set to true if using HTTPS
    maxAge: 2 * 60 * 60 * 1000, // 2 Hours // Restrict the cookie to admin routes only
  });

  const user = searchedUser;
  return res.status(200).json({
    message: "User logged in successfully",
    token,
    user,
  });
};

export const userLogout = async (req, res) => {
  try {
    res.clearCookie("user");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserPersonalDetails = async (req, res) => {
  const {
    firstName,
    lastName,
    id,
    phoneNumber,
    street,
    city,
    state,
    zipcode,
    country,
  } = req.body;

  try {
    console.log("phone Number: ", req?.body.phoneNumber);
    const updatedUser = await User.findOneAndUpdate(
      { _id: id }, // Find user by id
      {
        firstName,
        lastName,
        phoneNumber,
        address: { street, city, state, zipcode, country }, // Updating nested address object
      },
      { new: true } // Return updated user & apply validation
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(201).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserDetails = async (req, res) => {
  const { id, personal , wishlist } = req.query;
  try {
    const user = await User.findById(id);

    if (personal) {
      res
        .status(200)
        .json({
          message: "User details fetched successfully",
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
          },
        });
    }

    if(wishlist){
      res.status(200).json({ message: "User details fetched successfully", userWishlist: user.wishlist });
    }
    
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

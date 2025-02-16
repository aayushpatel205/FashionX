import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const comparePwd = (password) => {
  const orgPwd = bcrypt.compareSync(password,process.env.ADMIN_PASSWORD);
  return orgPwd;
};
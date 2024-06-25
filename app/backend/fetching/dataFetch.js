import { connectDB } from "../config/connect";
import { User } from "../models/UserModel";

export const getUsers = async (q) => {
  connectDB();
  const pattern = RegExp(q, "i");
  const myUsers = await User.find({ username: { $regex: pattern } });
  return myUsers;
};

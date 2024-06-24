import { connectDB } from "../config/connect";
import { User } from "../models/UserModel";

export const getUsers = async () => {
  connectDB();
  const myUsers = await User.find();
  return myUsers;
};

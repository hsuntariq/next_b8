"use server";

import { redirect } from "next/navigation";
import { connectDB } from "../config/connect";
import { User } from "../models/UserModel";
import { revalidatePath } from "next/cache";

connectDB();
export const addUser = async (formFields) => {
  const { username, email, password, phone, admin, active, message } =
    Object.fromEntries(formFields);
  const createdUser = await User.create({
    username,
    email,
    password,
    phone,
    admin,
    active,
    message,
  });
  redirect("/dashboard/users/user-account");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  const foundUser = await User.findByIdAndDelete(id);
  revalidatePath("/dashboard/users/user-account");
};

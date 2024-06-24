import { connectDB } from "@/app/backend/config/connect";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full md:w-[90%] mx-auto p-5 bg-secondary">
        <form action="">
          <div className="flex items-center gap-5 justify-between">
            <input
              type="text"
              placeholder="Username"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
          </div>
          <div className="flex items-center gap-5 justify-between">
            <input
              type="password"
              placeholder="Password"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
          </div>
          <div className="flex items-center gap-5 justify-between">
            <select
              type="text"
              placeholder="Username"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <select
              type="text"
              placeholder="Username"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <textarea
            name=""
            className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            id=""
            rows={10}
            placeholder="Message..."
          ></textarea>
          <button className="w-full p-3 bg-green-400 font-bold text-white">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default page;

import { addUser } from "@/app/backend/actions/actions";
import { connectDB } from "@/app/backend/config/connect";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full md:w-[90%] mx-auto p-5 bg-secondary">
        <form action={addUser}>
          <div className="flex items-center gap-5 justify-between">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
          </div>
          <div className="flex items-center gap-5 justify-between">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            />
          </div>
          <div className="flex items-center gap-5 justify-between">
            <select
              name="admin"
              type="text"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            >
              <option value={true}>Admin</option>
              <option value={false}>User</option>
            </select>
            <select
              name="active"
              type="text"
              placeholder="Username"
              className="bg-primary my-2 w-full p-3 text-gray-200 outline-none"
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </div>
          <textarea
            name="message"
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

"use client";
import React, { useEffect, useState } from "react";
import { signIN } from "./backend/actions/actions";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkUser = localStorage.getItem("myUser");
    if (checkUser) {
      router.push("/dashboard");
    }
  }, [router]);

  const auth = async (e) => {
    e.preventDefault();
    try {
      const user = await signIN(email, pass);
      localStorage.setItem("myUser", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="container min-h-screen rounded-lg shadow w-full flex justify-center items-center md:w-1/3 mx-auto">
        <form onSubmit={auth} className="bg-white shadow-lg rounded-xl p-5">
          <h1 className="text-3xl my-5 text-purple-500 font-bold text-center">
            Sign Into the Dashboard
          </h1>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email..."
            className="w-full p-3 rounded-md text-gray-700 bg-purple-100 border outline-none border-purple-500"
            required
          />
          <label>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter your password..."
            className="w-full p-3 rounded-md text-gray-700 bg-purple-100 border outline-none border-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full text-white font-bold p-4 my-3 rounded-md bg-purple-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;

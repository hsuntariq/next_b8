import React from "react";
import { FaBell, FaComment, FaGlobe } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="container flex text-white self-start  justify-between items-center mx-auto w-full md:w-[90%] p-6 my-4 rounded-lg bg-secondary">
        <h4 className="text-3xl">Dashboard</h4>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-md bg-gray-700"
          />
          <FaBell size={25} />
          <FaGlobe size={25} />
          <FaComment size={25} />
        </div>
      </div>
    </>
  );
};

export default Nav;

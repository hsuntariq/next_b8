import React from "react";
import { FaUser } from "react-icons/fa";
import Ads from "./Ads";

const Cards = () => {
  return (
    <>
      <div className="flex w-full  mx-auto mb-5 items-center justify-between gap-4">
        <div className="flex text-white bg-secondary w-full p-6 flex-col rounded-md shadow-md gap-4">
          <div className="flex gap-4">
            <FaUser />
            <h3 className="capitalize">Total Users</h3>
          </div>
          <h4 className="font-bold">10,400</h4>
        </div>
        <div className="flex text-white bg-secondary w-full p-6 flex-col rounded-md shadow-md gap-4">
          <div className="flex gap-4">
            <FaUser />
            <h3 className="capitalize">Total Users</h3>
          </div>
          <h4 className="font-bold">10,400</h4>
        </div>
        <div className="flex text-white bg-secondary w-full p-6 flex-col rounded-md shadow-md gap-4">
          <div className="flex gap-4">
            <FaUser />
            <h3 className="capitalize">Total Users</h3>
          </div>
          <h4 className="font-bold">10,400</h4>
        </div>
      </div>
    </>
  );
};

export default Cards;

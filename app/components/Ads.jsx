import React from "react";
import { FaUsb } from "react-icons/fa";

const Ads = () => {
  return (
    <>
      <div
        className=" text-white flex flex-col gap-4  p-10  self-start object-contain"
        style={{
          backgroundImage:
            "linear-gradient(45deg,rgba(25, 34, 55,0.3),rgba(20, 37, 50,0.7)),url(https://i.pinimg.com/originals/58/9e/ab/589eab35dd53bb00a87f28129ef8f16c.png)",
          backgroundSize: "contain",
          backgroundPosition: "right right",
          // backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex gap-5">
          <FaUsb />
          <h4 className="font-bold w-max">Available Now</h4>
        </div>
        <h4 className="font-bold">Lorem ipsum dolor sit amet.</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quaerat.
        </p>
      </div>
    </>
  );
};

export default Ads;

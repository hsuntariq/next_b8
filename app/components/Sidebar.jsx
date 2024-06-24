import React from "react";
import { FaUser } from "react-icons/fa";
import { data } from "../dashboard/data";
import Link from "next/link";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-3 p-5  min-h-screen  bg-secondary xl:w-[20%] lg:w-[25%] md:w-[40%]  w-full  ">
        <div className=" flex items-center gap-5 text-white self-start ">
          <div className="bg-gray-500 p-5 rounded-full">
            <FaUser />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-white">User</h4>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
        <ul className="unstyled p-4 text-gray-300 font-bold flex flex-col gap-4">
          {data?.map((item, index) => {
            return (
              <>
                <li key={index}>{item?.title}</li>
                <ul className="unstyled font-light text-white px-4 py-3 flex flex-col gap-3">
                  {item?.content?.map((inner, index) => {
                    return (
                      <>
                        <div className="flex items-center hover:bg-gray-300 p-2 rounded-full hover:text-black hover:font-bold transition-all cursor-pointer gap-4">
                          {inner?.icon}
                          <Link
                            href={inner?.link}
                            key={index}
                            className=" w-full"
                          >
                            {inner?.title}
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

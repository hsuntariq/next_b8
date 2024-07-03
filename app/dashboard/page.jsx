"use client";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import Transactions from "../components/Transactions";
import Charts from "../components/Charts";
import Ads from "../components/Ads";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const checkUser = localStorage.getItem("myUser");
  if (!checkUser) {
    router.push("/");
  } else {
    return (
      <>
        <div className="flex w-[90%] my-5 gap-5 mx-auto ">
          <div className="flex w-full flex-col justify-center">
            <Cards />
            <Transactions />
            <Charts />
          </div>
          <div className="flex w-[20%]">
            <Ads />
          </div>
        </div>
      </>
    );
  }
};

export default Page;

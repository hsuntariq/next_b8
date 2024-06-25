"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  // get the current url pathname
  const path = usePathname();
  // make a query search object
  const searchObject = useSearchParams();
  // convert the object into a string/url
  const params = new URLSearchParams(searchObject);
  // replace the current URL with tha new search parameter
  const { replace } = useRouter();

  const handleChange = (e) => {
    if (e.target.value == "") {
      params.delete("q");
    } else {
      params.set("q", e.target.value);
    }
    replace(`${path}?${params}`);
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search User..."
          className="bg-gray-700 my-2 outline-0 p-3 rounded-full text-gray-200"
        />
      </form>
    </>
  );
};

export default Search;

import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { getUsers } from "@/app/backend/fetching/dataFetch";
import Search from "@/app/components/Search";
import { deleteUser } from "@/app/backend/actions/actions";

const page = async ({ searchParams }) => {
  const { q } = searchParams;

  const users = await getUsers(q);
  return (
    <>
      <div className="w-full md:w-[90%] mx-auto bg-secondary p-5 rounded-md">
        <Search />
        <h1 className="text-3xl  text-gray-300 capitalize">Users</h1>
        <table className="w-full capitalize text-left text-white my-5">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>admin</th>
              <th>status</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="py-5">{index + 1}</td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.admin ? "Admin" : "User"}</td>
                    <td>
                      {item?.active ? (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="bg-green-600 p-1 rounded-full"></div>
                            <h5 className="font-bold">Active</h5>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="bg-gray-600 p-1 rounded-full"></div>
                            <h5 className="font-bold">In Active</h5>
                          </div>
                        </>
                      )}
                    </td>
                    <td>${Math.floor(Math.random() * 5000)}</td>
                    <td>
                      <form action={deleteUser}>
                        <input type="hidden" name="id" value={item?._id} />
                        <button className="bg-red-500 self-center px-3 py-3 rounded-md hover:bg-red-700 border-0">
                          <FaTrashCan />
                        </button>
                      </form>
                    </td>
                    <td>
                      <button className="bg-blue-500 self-center px-3 py-3 rounded-md hover:bg-blue-700 border-0">
                        <FaRegEdit />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;

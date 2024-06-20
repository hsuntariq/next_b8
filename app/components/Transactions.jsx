import React from "react";

const Transactions = () => {
  return (
    <>
      <div className="w-full md:w-full mx-auto bg-secondary p-5 rounded-md">
        <h1 className="text-3xl  text-gray-300 capitalize">
          latest Transactions
        </h1>
        <table className="w-full capitalize text-left text-white my-5">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>status</th>
              <th>date</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Ahmed</td>
                    <td>Active</td>
                    <td>
                      {
                        new Date(Date.now()).toLocaleDateString("en")
                        //   .split("/")[0]
                      }
                    </td>
                    <td>${Math.floor(Math.random() * 5000)}</td>
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

export default Transactions;

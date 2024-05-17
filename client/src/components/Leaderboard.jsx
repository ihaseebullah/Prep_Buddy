import React, { useContext } from "react";
import r1 from "../assets/img/1st.png";
import r2 from "../assets/img/2nd.png";
import r3 from "../assets/img/3rd.png";
import { AuthContext } from "../Context/AuthContext";
let images = [r1, r2, r3];
export default function Leaderboard({ leaderboard }) {
  const { userData } = useContext(AuthContext);
  return (
    <div className="mb-[5rem] rounded-md relative mt-3 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span>Rank</span>
              <span className="mx-4">Name</span>
            </th>

            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 &&
            leaderboard.map((user, index) => {
              console.log(userData);
              return (
                <>
                  {userData && userData._id === user._id ? (
                    <tr
                      key={Math.random()}
                      style={{ backgroundColor: "#3B4483" }}
                      className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                       <span className="flex items-center">
                          {index + 1 < 4 ? (
                            <span className="font-semibold">
                              <img
                                src={images[index]}
                                style={{
                                  maxWidth: "2.5rem",
                                  minWidth: "2.5rem",
                                }}
                                className="inline-block"
                              />
                            </span>
                          ) : (
                            <span className="font-semibold mx-2">
                              {index + 1}th&nbsp;
                            </span>
                          )}

                          {/*  */}
                          <span className="mx-3">
                            <span className="font-semibold text-white">
                              {user.fullName}
                            </span>
                          </span>
                        </span>
                      </th>

                      <td className="px-6 text-white py-4 font-semibold ">
                        {/* Modal toggle */}
                        {user.points}
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={Math.random()}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <span className="flex items-center">
                          {index + 1 < 4 ? (
                            <span className="font-semibold">
                              <img
                                src={images[index]}
                                style={{
                                  maxWidth: "2.5rem",
                                  minWidth: "2.5rem",
                                }}
                                className="inline-block"
                              />
                            </span>
                          ) : (
                            <span className="font-semibold mx-2">
                              {index + 1}th&nbsp;
                            </span>
                          )}

                          {/*  */}
                          <span className="mx-3">
                            <span className="font-semibold">
                              {user.fullName}
                            </span>
                          </span>
                        </span>
                      </th>

                      <td className="px-6 py-4 font-semibold text-blue-900">
                        {/* Modal toggle */}
                        {user.points}
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import { FaPlus } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item, data }) => {
  const abc = data
  const cancelSeat = () => {
    fetch(`http://localhost:3001/seat/${item.room}/remove/${item.matric}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((i) => {
        console.log(i);
      });
  };
  const allocateUser = () => {
    fetch(`http://localhost:3001/seat/vacant`)
      .then((res) => res.json())
      .then((data) => {
        abc({
          user: item.matric,
          room: data
        })
      });

    /* fetch(`http://localhost:3001/seat/${item.room}/add/${item.matric}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((i) => {
        console.log(i);
      }); */
  };
  return (
    <>
      <tr class="bg-white border-2 border-l-0 border-r-0 border-zinc-300 transition duration-300 ease-in-out text-gray-900">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.current}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room ? <>{item.room}</> : "N/A"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white  flex justify-center gap-x-4">
          {!item.room ? (
            <button
              onClick={allocateUser}
              className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800"
            >
              <span>Allocate</span>
              <FaPlus />
            </button>
          ) : (
            <>
              <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800">
                <span>Change Room</span>
                <FaPlus />
              </button>
              <button
                onClick={cancelSeat}
                className="flex items-center gap-x-2 px-3 py-2 rounded bg-gray-200 hover:bg-red-500"
              >
                <span>Cancel Seat</span>
                <ImBlocked />
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

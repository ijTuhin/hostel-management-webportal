import React from "react";
import { FaPlus } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
const TableData = ({item}) => {
  return (
    <>
      <tr class="bg-white border-2 border-l-0 border-r-0 border-zinc-300 transition duration-300 ease-in-out text-gray-900">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{item.matric}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{item.dept}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {item.current}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {item.room}
          {/* {item.status ? <>{item.room}</> : "N/A"} */}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white  flex justify-center gap-x-4">
          <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800">
            <span>Allocate</span>
            <FaPlus />
          </button>
          {/* {item.status ? (
            <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-red-500 hover:bg-red-600">
              <span>Cancel Seat</span>
              <ImBlocked />
            </button>
          ) : (
            <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-gray-200 cursor-not-allowed">
              <span>Cancel Seat</span>
              <ImBlocked />
            </button>
          )} */}
          <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-gray-200 cursor-not-allowed">
            <span>Cancel Seat</span>
            <ImBlocked />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

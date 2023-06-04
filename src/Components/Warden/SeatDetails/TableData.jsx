import React from "react";
import { SiFampay } from "react-icons/si";
import { RxDoubleArrowRight } from "react-icons/rx";
import SeatUser from "./SeatUser";
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[1] ? (
            <SeatUser id={item.member[1]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[2] ? (
            <SeatUser id={item.member[2]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[3] ? (
            <SeatUser id={item.member[3]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[4] ? (
            <SeatUser id={item.member[4]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[5] ? (
            <SeatUser id={item.member[5]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.member[6] ? (
            <SeatUser id={item.member[6]} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

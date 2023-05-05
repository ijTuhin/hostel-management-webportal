import React from "react";
import { SiFampay } from "react-icons/si";
import { RxDoubleArrowRight } from "react-icons/rx";
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4">
            <span className="mb-0.5">Item list</span> <RxDoubleArrowRight />
          </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
      </tr>
    </>
  );
};

export default TableData;
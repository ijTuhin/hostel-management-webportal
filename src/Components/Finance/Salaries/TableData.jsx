import React from "react";
import {SiFampay} from "react-icons/si"
import {RxDoubleArrowRight} from "react-icons/rx"
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.dept}
        </td>
        <td class={`${item.status ? "text-green-500" : "text-gray-300"} px-6 py-4 whitespace-nowrap text-sm font-semibold`}>
          {item.status ? "Paid" : <div>Pending <button className="border px-2 py-1 rounded hover:bg-red-500 hover:text-white">Change</button></div>}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class={`${item.status ? "text-pink-500" : "text-gray-500"} px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center`}>
          {item.status ? <SiFampay /> : "Manual"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4"><span className="mb-0.5">view record</span> <RxDoubleArrowRight/></button>
        </td>
      </tr>
    </>
  );
};

export default TableData;
import React from "react";
import {SiFampay} from "react-icons/si"
import {RxCross2} from "react-icons/rx"
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-blue-200 transition duration-300 ease-in-out text-gray-900 hover:bg-green-50">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.transaction}
        </td>
        <td class={`${item.user.rent ? "text-green-500" : "text-gray-300"} px-6 py-4 whitespace-nowrap text-sm font-semibold`}>
          {item.user.rent ? "Received" : <div>Pending <button className="border px-2 py-1 rounded hover:bg-red-500 hover:text-white">Change</button></div>}
        </td>
      </tr>
    </>
  );
};

export default TableData;

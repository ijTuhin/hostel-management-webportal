import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-amber-100 transition duration-300 ease-in-out hover:bg-amber-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 uppercase">
          {item.user.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.user.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.user.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.time}
        </td>
        <td class={`${item.status ? "text-green-500" : "text-red-500"} px-6 py-4 whitespace-nowrap text-sm font-semibold`}>
          {item.status ? <AiOutlineCheck /> : <RxCross2 />}
        </td>
      </tr>
    </>
  );
};

export default TableData;

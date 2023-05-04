import React from "react";
import {AiOutlineCheck} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-amber-100 transition duration-300 ease-in-out text-gray-900 hover:bg-amber-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class={`${item.status ? "text-green-500" : "text-red-500"} px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center`}>
          {item.status ? <AiOutlineCheck /> : "Absent"}
        </td>
      </tr>
    </>
  );
};

export default TableData;

import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { month } from "../../../Utilities/Hooks/CommonHooks";
const TableData = ({ item }) => {
  const check = item?.payments?.filter((i) => {
    if (i.item === "rent" && i.month === month) return i;
  });
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
        <td
          class={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
            item.rent ? "text-green-500" : "text-gray-300"
          }`}
        >
          {item.rent ? "Paid" : "Pending"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.rent ? <>{check[0]?.date}</> : "---"}
        </td>
      </tr>
    </>
  );
};

export default TableData;

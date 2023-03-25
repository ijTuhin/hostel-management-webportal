import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-green-100 transition duration-300 ease-in-out hover:bg-green-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.session}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.status}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          {item.phone}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <button className="w-full flex justify-center items-center gap-x-1 font-medium hover:text-green-600 hover:text-sm">
            <span className="text-xs">view Profile</span> <MdKeyboardDoubleArrowRight />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

import React from "react";

const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-amber-100 transition duration-300 ease-in-out hover:bg-amber-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.time}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.status}
        </td>
      </tr>
    </>
  );
};

export default TableData;

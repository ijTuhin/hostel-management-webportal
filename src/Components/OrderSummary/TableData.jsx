import React from "react";

const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-green-100 transition duration-300 ease-in-out hover:bg-green-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item._id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.meal}
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

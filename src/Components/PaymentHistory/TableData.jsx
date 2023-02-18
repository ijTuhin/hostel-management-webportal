import React from "react";

const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-green-100 transition duration-300 ease-in-out hover:bg-green-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          01
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.method}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.amount}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.transaction}
        </td>
      </tr>
    </>
  );
};

export default TableData;

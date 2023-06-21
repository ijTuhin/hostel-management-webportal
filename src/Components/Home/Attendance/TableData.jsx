import React from "react";
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-amber-100 transition duration-300 ease-in-out text-gray-900 hover:bg-amber-50">
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
          {item.time}
        </td>
        <td class="text-green-500 px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center">
          Present
        </td>
      </tr>
    </>
  );
};

export default TableData;

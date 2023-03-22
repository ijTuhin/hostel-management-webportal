import React from "react";

const StudentData = ({ item }) => {
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
          {item.status}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <button className="hover:border-green-500 hover:text-green-500 border border-gray-300 rounded px-2 py-1.5 text-gray-400">Mess manager</button>
        </td>
      </tr>
    </>
  );
};

export default StudentData;

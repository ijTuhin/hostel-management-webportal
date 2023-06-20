import React from "react";
import { GiCheckMark } from "react-icons/gi";
import getCurrentMonthSalary from "../../../Utilities/Hooks/SalaryHook";
const TableData = ({ item, index }) => {
  getCurrentMonthSalary(item)
  return (
    <>
      <tr
        class={`border-b border-gray-100 transition duration-300 ease-in-out ${
          index % 2 ? `bg-white ` : `bg-gray-50 `
        }`}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.position}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.joining}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
          {item.salary}
        </td>
        <td class="px-6 py-4 whitespace-nowrap flex justify-center text-gray-300 text-sm font-medium">
          {status ? (
            <span className="text-xl text-green-500">
              <GiCheckMark />
            </span>
          ) : (
            "Pending"
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

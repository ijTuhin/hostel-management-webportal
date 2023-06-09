import React, { useState } from "react";
import StaffUpdateForm from "./StaffUpdateForm";
const TableData = ({ item, index }) => {
  const [form, setForm] = useState(true);
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
          {item.phone}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.joining}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
          {item.salary}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
          <button
            onClick={() => {
              setForm((prev) => !prev);
            }}
            className="px-3.5 py-2 hover:text-amber-600 text-amber-500"
          >
            {form ? "Update" : "Cancel"}
          </button>
        </td>
      </tr>
      <StaffUpdateForm active={form} item={item}/>
    </>
  );
};

export default TableData;

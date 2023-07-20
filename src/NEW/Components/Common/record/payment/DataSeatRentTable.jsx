import React from "react";

export default function DataSeatRentTable({ style }) {
  return (
    <>
      <tr
        class={`${
          style
            ? style
            : "bg-white text-gray-900 hover:bg-green-50 border-blue-200"
        } border-b  transition duration-300 ease-in-out`}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Matric</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Bill</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Date</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">TrxID</td>
      </tr>
    </>
  );
}

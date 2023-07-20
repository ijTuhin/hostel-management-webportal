import React from "react";

export default function TableData({ style }) {
  return (
    <>
      <tr
        class={`${
          style
            ? style
            : "bg-white text-gray-900 hover:bg-zinc-50 border-zinc-200"
        } border-b transition duration-300 ease-in-out`}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          Tomato
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          10Kg
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          250/-
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          2500/-
        </td>
      </tr>
    </>
  );
}

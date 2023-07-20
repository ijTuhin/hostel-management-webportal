import React from "react";

export default function TableData({ style, item }) {
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
          {item?.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item?.amount}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item?.rate}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item?.price}
        </td>
      </tr>
    </>
  );
}

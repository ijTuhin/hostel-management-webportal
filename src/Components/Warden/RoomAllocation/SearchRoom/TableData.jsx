import React from "react";
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white transition duration-300 ease-in-out text-gray-900">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border-b border-zinc-200">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border-b border-zinc-200">
          {item.vacant}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-start">
          <button className="hover:bg-rose-800/75 hover:border-rose-800 hover:text-white border-2 border-zinc-400 text-zinc-400 px-3 py-1.5 rounded-md">Choose</button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

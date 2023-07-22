import React from "react";
const UtilityTableData = (record) => {
  console.log(record.record,"Table")
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {record?.record?.month}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {record?.record?.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {record?.record?.date}
        </td>
      </tr>
    </>
  );
};

export default UtilityTableData;

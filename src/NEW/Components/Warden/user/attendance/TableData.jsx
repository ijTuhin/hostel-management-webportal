import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const TableData = ({ item }) => {
  const data = item?.attendance[item?.attendance?.length - 1]?._id;
  const attendance = new Date(
    parseInt(data?.toString().substring(0, 8), 16) * 1000
  );
  let status;
  if (attendance.getDate() === new Date().getDate()) status = 1;
  else status = 0;
  return (
    <>
      <tr class="bg-white border-b border-amber-100 transition duration-300 ease-in-out text-gray-900 hover:bg-amber-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item?.room?.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {status ? <>{attendance.toLocaleTimeString()}</> : "---"}
        </td>
        <td
          class={`${
            status ? "text-green-500" : "text-red-500"
          } px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center`}
        >
          {status ? <AiOutlineCheck /> : "Absent"}
        </td>
      </tr>
    </>
  );
};

export default TableData;

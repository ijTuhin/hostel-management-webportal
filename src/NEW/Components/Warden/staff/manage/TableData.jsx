import React, { useState } from "react";
import DeleteStaffButton from "./DeleteStaffButton";
import { month } from "../../../../Hooks/conditionData";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item, index }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <>
      <tr
        class={`border-b border-gray-100 transition duration-300 ease-in-out group ${
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
          {item?.record[item?.record?.length - 1]?.month === month
            ? new Date(
                parseInt(
                  item?.record[item?.record?.length - 1]?._id
                    .toString()
                    .substring(0, 8),
                  16
                ) * 1000
              ).toLocaleDateString()
            : "---"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center justify-center text-center">
          <button
            onClick={() => {
              setOpen(true);
              setData(item);
            }}
            className="px-3.5 py-2 hover:text-amber-600 text-amber-500"
          >
            Update
          </button>
          <DeleteStaffButton item={item} />
        </td>
      </tr>
    </>
  );
};

export default TableData;

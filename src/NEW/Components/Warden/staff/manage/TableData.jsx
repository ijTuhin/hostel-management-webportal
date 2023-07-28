import React, { useState } from "react";
import StaffUpdateForm from "./StaffUpdateForm";
import DeleteStaffButton from "./DeleteStaffButton";
import { month } from "../../../../Hooks/conditionData";
import { useOutletContext } from "react-router-dom";
import UpdateModal from "./UpdateModal";
const TableData = ({ item, index }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  // console.log(data);
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
          {item?.record[0]?.month === month ? item?.record[0].date : "---"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center justify-center text-center">
          <button
            onClick={() => {
              // setForm((prev) => !prev);
              setOpen(true);
              setData(item)
            }}
            className="px-3.5 py-2 hover:text-amber-600 text-amber-500"
          >
            {/* {form ? "Update" : "Cancel"} */}
            Update
          </button>
          <DeleteStaffButton item={item} />
        </td>
      </tr>
      {/* <StaffUpdateForm active={form} item={item} /> */}
    </>
  );
};

export default TableData;

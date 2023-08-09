import React from "react";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <>
      <tr class="bg-white border-b border-blue-200 transition duration-300 ease-in-out text-gray-900 hover:bg-green-50">
        <td
          onClick={() => {
            setOpen(true);
            setData(item);
            setUpload(null);
          }}
          class="px-6 py-4 whitespace-nowrap text-sm font-medium cursor-pointer"
        >
          {item.user.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.room.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {new Date( parseInt( item?._id.toString().substring(0,8), 16 ) * 1000 ).toLocaleDateString()}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.trxID}
        </td>
        <td
          class={`${
            item.user.rent ? "text-green-500" : "text-gray-300"
          } px-6 py-4 whitespace-nowrap text-sm font-semibold`}
        >
          {item.date ? (
            "Received"
          ) : (
            <div>
              Pending{" "}
              <button className="border px-2 py-1 rounded hover:bg-red-500 hover:text-white">
                Change
              </button>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

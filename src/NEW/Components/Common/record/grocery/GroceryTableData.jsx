import React from "react";
import { useOutletContext } from "react-router-dom";

export default function GroceryTableData({ item, set }) {
  const [open, setOpen, data, setData, upload, setUpload, setID] =
    useOutletContext();
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item?.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item?.total}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          <button
            onClick={() => {
              setOpen(true);
              setData(item);
              setUpload(null);
              // setID(`https://hms-server-side.onrender.com/grocery?date=${item?.date}`)
            }}
            className="font-semibold"
          >
            Check Items
          </button>
        </td>
      </tr>
    </>
  );
}

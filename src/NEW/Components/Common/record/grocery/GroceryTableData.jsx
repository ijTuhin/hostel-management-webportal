import React from "react";
import { useOutletContext } from "react-router-dom";

export default function GroceryTableData() {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          02-08-2023
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          2500/-
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          <button
            onClick={() => {
              setOpen(true);
              setData(item);
              setUpload(null);
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

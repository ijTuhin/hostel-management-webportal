import React from "react";
import { FaCoins } from "react-icons/fa";
import { role } from "../../../Hooks/conditionData";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <>
      <tr class="bg-white border-b border-blue-200 transition duration-300 ease-in-out text-gray-900 hover:bg-green-50">
        <td
          onClick={() => {
            if (role !== "meal") {
              setOpen(true);
              setData(item);
              setUpload(null);
            }
          }}
          class={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
            role === "warden" && "cursor-pointer"
          }`}
        >
          {item.user.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.user?.room?.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.transaction}
        </td>
        <td class="px-6 py-4 text-sm font-medium flex justify-center items-center gap-2">
          <span>{item?.coupon ? item?.coupon : "0"}</span>
          <span>
            <FaCoins />
          </span>
        </td>
        {role !== "meal" && (
          <td
            class={`${
              item.user.meal ? "text-green-500" : "text-gray-300"
            } px-6 py-4 whitespace-nowrap text-sm font-semibold`}
          >
            {item.user.meal ? (
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
        )}
      </tr>
    </>
  );
};

export default TableData;

import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { token } from "../../../Utilities/Hooks/CommonHooks";
const TableData = ({ item }) => {
  const total = item.bill + item.due.bill;
  const updatePayBill = () => {
    fetch(`https://hms-server-side.onrender.com/utility/pay-due/${item._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
    })
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
        window.location.reload();
      });
  };
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.due.bill}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{total}</td>
        <td
          class={`${
            !item.status ? "text-green-500" : ""
          } px-6 py-4 whitespace-nowrap text-sm font-semibold`}
        >
          {!item.status ? (
            "Paid"
          ) : (
            <div>
              {total ? (
                <button
                  onClick={updatePayBill}
                  className="border border-gray-300 text-gray-300 font-normal px-3.5 py-1 rounded hover:bg-green-500 hover:text-white"
                >
                  Pay
                </button>
              ) : (
                <p className="text-gray-300">Pending</p>
              )}
            </div>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4">
            <span className="mb-0.5">view record</span> <RxDoubleArrowRight />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

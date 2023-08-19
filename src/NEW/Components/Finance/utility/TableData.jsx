import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { token } from "../../../Hooks/conditionData";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const [show, setShow, id, setID] = useOutletContext();
  const link = `https://hms-server-side.onrender.com/utility?name=${item.name}`;
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
        window.location.replace(item.url);
      });
  };
  return (
    <>
      <tr
        class={`bg-white  transition duration-300 ease-in-out border-b border-zinc-200  ${
          show
            ? id === item.name
              ? "bg-zinc-100"
              : "text-gray-900 hover:bg-zinc-50"
            : "text-gray-900 hover:bg-zinc-50"
        }`}
      >
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
                  className="border border-gray-300 text-gray-300 font-normal px-5 py-1.5 rounded hover:bg-cyan-700 hover:text-white"
                >
                  Pay
                </button>
              ) : (
                <p
                  className={`${
                    show
                      ? id === item.name
                        ? "text-gray-400"
                        : "text-gray-300"
                      : "text-gray-300"
                  }`}
                >
                  Pending
                </p>
              )}
            </div>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={() => {
              setID(link);
              setShow((i) => !i);
            }}
            className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4"
          >
            <span className="mb-0.5">
              {show
                ? id.split("=")[1] === item.name
                  ? "close"
                  : "view record"
                : "view record"}
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

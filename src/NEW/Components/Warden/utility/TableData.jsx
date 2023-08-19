import React, { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import AddBillBtn from "./AddBillBtn";
import AddBill from "./AddBill";
import { useNavigate, useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const navigate = useNavigate();
  const [show, setShow, id, setID] = useOutletContext();
  const [billInput, setBillInput] = useState(false);
  const link = `https://hms-server-side.onrender.com/utility?name=${item.name}`;
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
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
          {!item.bill ? (
            <>
              {billInput ? (
                <AddBill id={item._id} setBillInput={setBillInput} />
              ) : (
                <AddBillBtn setBillInput={setBillInput} />
              )}
            </>
          ) : (
            <>{item.bill}</>
          )}
        </td>
        <td
          class={`${
            !item.status
              ? "text-green-500"
              : show
              ? id === item.name
                ? "text-gray-400"
                : "text-gray-300"
              : "text-gray-300"
          } px-6 py-4 whitespace-nowrap text-sm font-semibold`}
        >
          {!item.status ? "Paid" : "Pending"}
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

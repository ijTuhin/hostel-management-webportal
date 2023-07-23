import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import {
  getCurrentMonthSalary,
  month,
  token,
} from "../../../Hooks/conditionData";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const [show, setShow, id, setID] = useOutletContext();
  // getCurrentMonthSalary(item);
  let status;
  if (item?.record[0]?.month === month) {
    status = 1;
  }
  const link = `http://localhost:3001/salary/${item._id}`;
  const paySalary = () => {
    fetch(`http://localhost:3001/salary/${item._id}`, {
      method: "POST",
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
      <tr
        class={`bg-white  transition duration-300 ease-in-out border-b border-zinc-200  ${
          show
            ? id === item.name
              ? "bg-zinc-100"
              : "text-gray-900 hover:bg-zinc-50"
            : "text-gray-900 hover:bg-zinc-50"
        }`}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
          {item.position}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.salary}
        </td>
        <td
          class={`${
            status ? "text-green-500" : "text-gray-300"
          } px-6 py-4 whitespace-nowrap text-sm font-semibold text-center`}
        >
          {status ? (
            "Paid"
          ) : (
            <button
              onClick={paySalary}
              className="border px-5 py-1 rounded hover:bg-violet-600 hover:text-white"
            >
              Pay
            </button>
          )}
        </td>
        <td class="text-gray-500 px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center">
          {!status ? "---" : <>{item?.record[0]?.month}</>}
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
                ? id.split("salary/")[1] === item._id
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

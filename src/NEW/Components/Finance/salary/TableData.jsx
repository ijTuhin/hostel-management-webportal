import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import getCurrentMonthSalary from "../../../../Utilities/Hooks/SalaryHook";
import { token } from "../../../Hooks/conditionData";
const TableData = ({ item }) => {
  getCurrentMonthSalary(item);
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
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
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
          {!status ? "---" : <>{salary.date}</>}
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

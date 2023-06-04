import React from "react";
import { SiFampay } from "react-icons/si";
import { RxDoubleArrowRight } from "react-icons/rx";
const TableData = ({ item }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();
  let status = 0;
  let salary = item.record[item.record.length -1]
  console.log(item.record[item.record.length -1])
  if (salary.month === month) status=1;
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
          } px-6 py-4 whitespace-nowrap text-sm font-semibold`}
        >
          {status ? (
            "Paid"
          ) : (
            <div>
              Pending{" "}
              <button className="border px-2 py-1 rounded hover:bg-red-500 hover:text-white">
                Pay
              </button>
            </div>
          )}
        </td>
        <td
          class="text-gray-500 px-6 py-4 whitespace-nowrap text-sm font-semibold flex justify-center"
        >
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

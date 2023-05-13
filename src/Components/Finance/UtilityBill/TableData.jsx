import React from "react";
import {SiFampay} from "react-icons/si"
import {RxDoubleArrowRight} from "react-icons/rx"
import PayBillBtn from "./PayBillBtn";
const TableData = ({ item }) => {
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
          {item.due}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {parseInt(item.bill) + parseInt(item.due)}
        </td>
        <td class={`${item.status ? "text-green-500" : ""} px-6 py-4 whitespace-nowrap text-sm font-semibold`}>
          {item.status ? "Paid" : <div>Pending <PayBillBtn data={item}/></div>}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.payDate ? <>{item.payDate}</> : "---"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4"><span className="mb-0.5">view record</span> <RxDoubleArrowRight/></button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

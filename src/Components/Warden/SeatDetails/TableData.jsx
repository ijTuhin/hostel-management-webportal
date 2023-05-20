import React from "react";
import {SiFampay} from "react-icons/si"
import {RxDoubleArrowRight} from "react-icons/rx"
const TableData = ({ item }) => {
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[1] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[1]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[2] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[2]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[3] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[3]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[4] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[4]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[5] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[5]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {
            item.member[6] ? <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{item.member[6]}</span> <RxDoubleArrowRight/></button>
            :
            <p className="text-red-500 font-semibold">vacant</p>
          }
        </td>
      </tr>
    </>
  );
};

export default TableData;

import React from "react";
import SeatUser from "./SeatUser";
import { useOutletContext } from "react-router-dom";
const TableData = ({ item }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  let member = 0;
  if (item?.member) member = item.member;
  // console.log(member);
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[0] ? (
            <button onClick={()=>{setOpen(true); setData(member[0])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[0].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[1] ? (
            <button onClick={()=>{setOpen(true); setData(member[1])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[1].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[2] ? (
            <button onClick={()=>{setOpen(true); setData(member[2])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[2].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[3] ? (
            <button onClick={()=>{setOpen(true); setData(member[3])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[3].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[4] ? (
            <button onClick={()=>{setOpen(true); setData(member[4])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[4].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[5] ? (
            <button onClick={()=>{setOpen(true); setData(member[5])}} className="hover:underline decoration-2 underline-offset-4 uppercase">
              {member[5].matric}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

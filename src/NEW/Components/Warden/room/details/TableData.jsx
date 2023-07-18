import React from "react";
import SeatUser from "./SeatUser";
const TableData = ({ item }) => {
  let member = 0;
  if (item?.member) member = item.member;
  console.log(member);
  return (
    <>
      <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[0] ? (
            <SeatUser id={member[0].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[1] ? (
            <SeatUser id={member[1].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[2] ? (
            <SeatUser id={member[2].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[3] ? (
            <SeatUser id={member[3].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[4] ? (
            <SeatUser id={member[4].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {member[5] ? (
            <SeatUser id={member[5].matric} />
          ) : (
            <p className="text-red-500 font-semibold">vacant</p>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

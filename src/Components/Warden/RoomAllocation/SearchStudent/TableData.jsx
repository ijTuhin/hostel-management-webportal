import React from "react";
import { FaPlus } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
const TableData = ({ item, data }) => {
  const abc = data;
  const cancelSeat = () => {
    fetch(
      `https://hms-server-side.onrender.com/seat/${item.room}/remove/${item.matric}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((i) => {
        console.log(i);
      });
    window.location.reload();
    window.onload(alert(`Removed User ${item.matric} from Room ${item.room}`));
  };
  const fetchRoomData = () => {
    console.log("Room Data");
    fetch(`https://hms-server-side.onrender.com/seat/vacant`)
      .then((res) => res.json())
      .then((data) => {
        let value = data;
        let previous = 0;
        if (item.room) {
          value = data.filter((i) => {
            if (i.room === item.room) return false;
            else return true;
          });
          previous = item.room;
        }
        abc({
          user: item.matric,
          room: value,
          previous,
        });
      });
  };
  return (
    <>
      <tr class="bg-white border-2 border-l-0 border-r-0 border-zinc-300 transition duration-300 ease-in-out text-gray-900">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.current}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {item.room ? <>{item.room}</> : "N/A"}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white  flex justify-center gap-x-4">
          {!item.room ? (
            <button
              onClick={fetchRoomData}
              className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800"
            >
              <span>Allocate</span>
              <FaPlus />
            </button>
          ) : (
            <>
              <button
                onClick={fetchRoomData}
                className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800"
              >
                <span>Change Room</span>
                <FaPlus />
              </button>
              <button
                onClick={cancelSeat}
                className="flex items-center gap-x-2 px-3 py-2 rounded bg-gray-200 hover:bg-red-500"
              >
                <span>Cancel Seat</span>
                <ImBlocked />
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

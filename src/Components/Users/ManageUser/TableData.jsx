import React from "react";
import { FcCancel } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const TableData = ({ item, index }) => {
  const navigate = useNavigate();
  const makeMealManager = () => {
    fetch("http://localhost:3001/admin/create-meal-manager", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        email: item.email,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log(value.message);
      });
  };
  return (
    <>
      <tr
        class={`border-b border-gray-100 transition duration-300 ease-in-out ${
          index % 2 ? `bg-white ` : `bg-gray-50 `
        }`}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.matric}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.name}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          <button
            onClick={() =>
              navigate(
                "/warden/room-allocation",
                { state: { id: 1, name: item.matric } },
                { replace: true }
              )
            }
            className="hover:bg-red-500 hover:text-white border border-red-400 rounded px-2 py-1.5 text-red-400"
          >
            Change
          </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <button
            onClick={makeMealManager}
            className="hover:border-green-500 hover:text-green-500 border border-gray-300 rounded px-2 py-1.5 text-gray-400"
          >
            Mess manager
          </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-xl flex justify-center">
          {item.account ? (
            <span className="text-green-500">
              <GiCheckMark />
            </span>
          ) : (
            <FcCancel />
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <button className="hover:bg-green-500 border-green-500 hover:text-white py-1.5 text-green-500 border rounded px-3">
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

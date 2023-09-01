import React from "react";
import { FcCancel } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate, useOutletContext } from "react-router-dom";
import { token } from "../../../../Hooks/conditionData";
const TableData = ({ item, index }) => {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
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
        password: item.password,
        // matric: item.matric,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        if (value.message) alert(value.message);
        console.log(value.message);
      });
  };
  const removeMealManager = () => {
    fetch("http://localhost:3001/admin/remove-meal-manager", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matric: item.matric,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        if (value.message) alert(value.message);
        console.log(value.message);
      });
  };
  const changeAcountValidity = () => {
    console.log(item._id, token);
    fetch(`http://localhost:3001/user/account/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
    })
      .then((response) => response.json())
      .then((value) => {
        window.location.reload();
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
          {item?.room && item?.room?.room}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          <button
            onClick={() =>
              navigate(
                "/room/allocation",
                { state: { id: 1, name: item.matric } },
                { replace: true }
              )
            }
            className="hover:bg-teal-600 hover:text-white border border-teal-500 rounded px-2 py-1.5 text-teal-500"
          >
            Change
          </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <div className="text-green-500 flex justify-center items-center group">
            <p
              className={`px-3.5 py-2 font-semibold visible group-hover:hidden ${
                item.role ? "text-teal-700" : "text-gray-300"
              }`}
            >
              {!item.role ? "None" : "Mess manager"}
            </p>
            <button
              onClick={item.role ? removeMealManager : makeMealManager}
              className={`hover:bg-red-600 hover:text-white border border-red-500 rounded hidden group-hover:block ${
                item?.role ? "px-[1.6rem] py-1.5 " : "px-2 py-1.5 "
              }`}
            >
              {!item.role ? "Change" : "Cancel role"}
            </button>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-xl flex justify-center">
          <div className="group">
            {item.account ? (
              <div className="text-green-500 flex justify-center items-center">
                <p className="px-3.5 py-2 text-2xl visible group-hover:hidden text-green-400">
                  <GiCheckMark />
                </p>
                <button
                  onClick={changeAcountValidity}
                  className="px-3.5 py-2 text-2xl hidden group-hover:block hover:text-red-500 text-red-400"
                >
                  <FcCancel />
                </button>
              </div>
            ) : (
              <div className="text-green-500 flex justify-center items-center">
                <p className="px-3.5 py-2 text-2xl visible group-hover:hidden text-red-400">
                  <FcCancel />
                </p>
                <button
                  onClick={changeAcountValidity}
                  className="px-3.5 py-2 text-2xl hidden group-hover:block hover:text-green-500 text-green-400"
                >
                  <GiCheckMark />
                </button>
              </div>
            )}
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
          <button
            onClick={() => {
              navigate(
                "/user/update",
                { state: { id: 1, name: item._id } },
                { replace: true }
              );
            }}
            className="hover:bg-green-500 border-green-500 hover:text-white py-1.5 text-green-500 border rounded px-3"
          >
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;

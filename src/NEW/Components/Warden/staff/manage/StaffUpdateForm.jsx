import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { token } from "../../../../Hooks/conditionData";

const StaffUpdateForm = ({ active, item }) => {
  const [value, setValue] = useState(true);
  const handleUpdate = () => {
    if (value.name === "") delete value.name;
    if (value.position === "") delete value.position;
    if (value.salary === "") delete value.salary;
    if (value.phone === "") delete value.phone;
    fetch(`https://hms-server-side.onrender.com/staff/${item._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });
  };
  return (
    <tr className={`${active && "hidden"}`}>
      <td>
        <input
          onKeyUp={(e) => {
            setValue({
              ...value,
              name: e.target.value,
            });
          }}
          type="text"
          className="outline-none border border-gray-600 p-2"
          name=""
          id=""
        />
      </td>
      <td>
        <input
          onKeyUp={(e) => {
            setValue({
              ...value,
              position: e.target.value,
            });
          }}
          type="text"
          className="outline-none border border-gray-600 p-2"
          name=""
          id=""
        />
      </td>
      <td>
        <input
          onKeyUp={(e) => {
            setValue({
              ...value,
              phone: e.target.value,
            });
          }}
          type="text"
          className="outline-none border border-gray-600 p-2"
          name=""
          id=""
        />
      </td>
      <td>
        <input
          type="text"
          className="outline-none border border-gray-600 p-2 invisible"
          name=""
          id=""
        />
      </td>
      <td>
        <input
          onKeyUp={(e) => {
            setValue({
              ...value,
              salary: e.target.value,
            });
          }}
          type="text"
          className="outline-none border border-gray-600 p-2"
          name=""
          id=""
        />
      </td>
      <td className="px-10 text-gray-500 text-xl hover:text-amber-500">
        <button onClick={handleUpdate}>
          <IoSend />
        </button>
      </td>
    </tr>
  );
};

export default StaffUpdateForm;

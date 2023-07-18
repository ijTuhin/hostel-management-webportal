import React from "react";
import { MdDelete } from "react-icons/md";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const DeleteStaffButton = ({ item }) => {
  const deleteStaff = () => {
    fetch(`http://localhost:3001/staff/${item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
        window.location.reload();
      });
  };
  return (
    <button
      onClick={deleteStaff}
      className="px-3.5 py-2 text-2xl invisible group-hover:visible hover:text-red-500 text-red-400"
    >
      <MdDelete />
    </button>
  );
};

export default DeleteStaffButton;

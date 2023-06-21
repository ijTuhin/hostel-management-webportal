import React, { useState } from "react";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const AddBill = ({ setBillInput, id }) => {
  const [bill, setBill] = useState("");
  const handleInput = (event) => {
    setBill(event.target.value);
    if (event.keyCode == 13) {
      fetch(`https://hms-server-side.onrender.com/utility/insert-bill/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Beared ${token}`,
        },
        body: JSON.stringify({ bill }),
      })
        .then((response) => response.json())
        .then(() => {
          setBillInput(false);
        });
    }
  };
  return (
    <div className="relative">
      <input
        onKeyUp={handleInput}
        onBlur={() => setBillInput(false)}
        type="text"
        className="border border-gray-400 p-2 w-24"
      />
    </div>
  );
};

export default AddBill;

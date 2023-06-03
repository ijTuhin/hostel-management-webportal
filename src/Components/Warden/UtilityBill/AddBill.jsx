import React, { useState } from "react";

const AddBill = ({ setBillInput, id }) => {
  const [bill, setBill] = useState("");
  const [billBtn, setBillBtn] = useState(false);
  const handleInput = (event) => {
    if (event.keyCode == 13) {
      setBill(event.target.value);
      fetch(`http://localhost:3001/utility/insert-bill/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({bill}),
      })
        .then((response) => response.json())
        .then((item) => {
          console.log(item);
        });
      setBillInput(false);
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

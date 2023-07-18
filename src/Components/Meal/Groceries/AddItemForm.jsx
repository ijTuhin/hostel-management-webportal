import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const AddItemForm = () => {
  const date = new Date().toLocaleDateString();
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState({
    name: "",
    rate: 0,
    amount: 0,
    unit: "",
    price: 0,
  });
  value.rate = parseInt(value.rate);
  value.amount = parseFloat(value.amount);
  value.price = value.amount * value.rate;
  const updateData = () => {
    let data = {
      list: value,
    };
    fetch(`http://localhost:3001/grocery?date=${date}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
      body: JSON.stringify({
        list: value,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });
    console.log(data);
  };
  return (
    <div className="w-fit flex justify-center">
      <form className="space-y-1">
        <label htmlFor="itemName">Grocery Item</label>
        <input
          onChange={(e) => {
            setValue({
              ...value,
              name: e.target.value,
            });
          }}
          type="text"
          className="w-full block outline-none border-2 border-gray-400 px-2 py-1.5 mb-2"
          name="itemName"
          id="itemName"
        />
        <div className="flex justify-between gap-x-5">
          <div>
            <label htmlFor="marketRate">Enter Market Rate</label>
            <div className="border-2 border-gray-400 px-2 py-1.5 mb-2 flex justify-between gap-x-1">
              <input
                onChange={(e) => {
                  setValue({
                    ...value,
                    rate: e.target.value,
                  });
                }}
                className="outline-none"
                type="text"
                name=""
                id=""
              />
              <p>Taka</p>
            </div>
          </div>
          <div>
            <label htmlFor="itemAmount">Enter Amount</label>
            <div className="border-2 border-gray-400 px-2 py-1.5 mb-2 flex justify-between gap-x-1">
              <input
                onBlur={() => {
                  setPrice(value.price);
                  console.log(value);
                }}
                onChange={(e) => {
                  setValue({
                    ...value,
                    amount: e.target.value,
                  });
                }}
                className="outline-none w-full"
                type="text"
                name=""
                id=""
              />
              <select
                name="unit"
                onClick={(e) => {
                  setValue({
                    ...value,
                    unit: e.target.value,
                  });
                  setPrice(value.price);
                  console.log(value);
                }}
                className="w-fit outline-none"
              >
                <option value="pcs">pcs</option>
                <option value="dozen">dozen</option>
                <option value="kg">kg</option>
                <option value="liter">liter</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 flex justify-between items-center">
          <p>
            Cost = <span>{price} taka</span>
          </p>
          <button
            onClick={updateData}
            className="flex items-center mt-1.5 gap-x-2 px-3 py-1.5 text-sm rounded bg-blue-900 hover:bg-blue-800 text-white"
          >
            <span>Add to </span>
            <FaCartPlus />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

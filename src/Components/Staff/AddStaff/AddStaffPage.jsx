import React, { useState } from "react";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const AddStaffPage = () => {
  const [value, setValue] = useState();
  const addStaffData = (e) => {
    if (!value) {
      return false;
    }
    fetch(`http://localhost:3001/staff`, {
      method: "POST", // or 'PUT'
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
    console.log(value);
  };
  return (
    <div className="h-full w-full flex justify-center py-20">
      <form className="w-1/3 space-y-5">
        <input
          onChange={(e) => {
            setValue({
              ...value,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter name"
          className="outline-none border-b border-gray-600 w-full px-3 py-2"
          name=""
          id=""
        />
        <input
          onChange={(e) => {
            setValue({
              ...value,
              address: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter Address"
          className="outline-none border-b border-gray-600 w-full px-3 py-2"
          name=""
          id=""
        />
        <div className="flex justify-center gap-x-3 w-full">
          <input
            onChange={(e) => {
              setValue({
                ...value,
                phone: e.target.value,
              });
            }}
            type="text"
            placeholder="Phone number"
            className="outline-none border-b border-gray-600 w-full px-3 py-2"
            name=""
            id=""
          />
          <input
            onChange={(e) => {
              setValue({
                ...value,
                salary: parseInt(e.target.value),
              });
            }}
            type="text"
            placeholder="Salary amount"
            className="outline-none border-b border-gray-600 w-full px-3 py-2"
            name=""
            id=""
          />
        </div>
        <div className="px-3 text-gray-500">
          <p className="text-gray-600">Choose Position:</p>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              onChange={(e) => {
                setValue({
                  ...value,
                  position: e.target.value,
                });
              }}
              id="age1"
              name="age"
              value="warden"
            />
            <label for="age1">Warden</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              onChange={(e) => {
                setValue({
                  ...value,
                  position: e.target.value,
                });
              }}
              id="age2"
              name="age"
              value="accountant"
            />
            <label for="age2">Accountant</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              onChange={(e) => {
                setValue({
                  ...value,
                  position: e.target.value,
                });
              }}
              id="age3"
              name="age"
              value="cleaner"
            />
            <label for="age3">Cleaner</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              onChange={(e) => {
                setValue({
                  ...value,
                  position: e.target.value,
                });
              }}
              id="age1"
              name="age"
              value="chef"
            />
            <label for="age1">Chef</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              onChange={(e) => {
                setValue({
                  ...value,
                  position: e.target.value,
                });
              }}
              id="age2"
              name="age"
              value="watchman"
            />
            <label for="age2">Watchman</label>
          </div>
        </div>
        <button
          onClick={addStaffData}
          className={`w-full py-2.5 bg-emerald-700 text-white ${
            value ? "hover:bg-emerald-800" : "cursor-not-allowed"
          }`}
        >
          Insert Data
        </button>
      </form>
    </div>
  );
};

export default AddStaffPage;

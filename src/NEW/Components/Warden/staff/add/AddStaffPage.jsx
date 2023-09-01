import React, { useState } from "react";
import { token } from "../../../../Hooks/conditionData";

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
      <form className="w-1/2 space-y-5">
        <input
          onChange={(e) => {
            setValue({
              ...value,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter name"
          className="outline-none border-b border-gray-600 w-full px-3 py-2 text-sm"
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
          className="outline-none border-b border-gray-600 w-full px-3 py-2 text-sm"
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
            className="outline-none border-b border-gray-600 w-full px-3 py-2 text-sm"
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
            className="outline-none border-b border-gray-600 w-full px-3 py-2 text-sm"
            name=""
            id=""
          />
        </div>
        <div className="px-3 text-gray-500">
          <p className="text-gray-600">Choose Position:</p>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              className="w-3"
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
            <p className="text-sm pb-1">Warden</p>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              className="w-3"
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
            <p className="text-sm pb-1">Accountant</p>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              className="w-3"
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
            <p className="text-sm pb-1">Cleaner</p>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              className="w-3"
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
            <p className="text-sm pb-1">Chef</p>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              className="w-3"
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
            <p className="text-sm pb-1">Watchman</p>
          </div>
        </div>
        <button
          onClick={addStaffData}
          className={`w-full py-2.5 bg-slate-900/50 text-white ${
            value ? "hover:bg-teal-800" : "cursor-not-allowed"
          }`}
        >
          Insert Data
        </button>
      </form>
    </div>
  );
};

export default AddStaffPage;

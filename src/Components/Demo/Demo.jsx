import React from "react";

const Demo = () => {
  const mealBill = () => {
    const value = {
        item: "meal"
    }
    fetch("http://localhost:3001/payment", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("Meal Bill:", value);
      });
  };
  return (
    <div className="pt-[4.35rem] flex flex-col items-center space-y-2">
      <button
        onClick={mealBill}
        className="px-3.5 py-2.5 border-2 rounded bg-gray-100"
      >
        Meal Bill
      </button>
      <button className="px-3.5 py-2.5 border-2 rounded bg-gray-100">
        Seat Rent
      </button>
      <button className="px-3.5 py-2.5 border-2 rounded bg-gray-100">
        Attendance
      </button>
      <button className="px-3.5 py-2.5 border-2 rounded bg-gray-100">
        Order Meal
      </button>
    </div>
  );
};

export default Demo;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }
  return (
    <div className="pt-[4.35rem] flex flex-col items-center space-y-2">
      <p className="text-xl font-bold">{date.toLocaleTimeString()}</p>
      <button
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

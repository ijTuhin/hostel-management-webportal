import React, { useEffect, useState } from "react";

const Clock = () => {
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
    <div className="w-40 h-40 rounded-full border-8 flex items-center justify-center border-red-300/25">
      <p className="text-xl font-bold">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;

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
    <div className="w-96 h-96 rounded-full border-0 flex items-center justify-center bg-green-700/10 border-black/25">
      <p className="text-4xl text-green-700 font-bold">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;

import React from "react";
import Clock from "../../../Utilities/Clock/Clock";

const MealHeading = () => {
  /* const event = new Date().toTimeString();
  const a = event.split(":")[0] + ":" + event.split(":")[1]; */
  const time = parseInt(new Date().toTimeString().split(":")[0]);
  let meal;
  if (time > 9 && time < 13) {
    meal = "Lunch";
  } else if (time > 14 && time < 23) {
    meal = "Dinner";
  } else if (time > 22 || time <= 9) {
    meal = "Breakfast";
  }
  return (
    <div className="relative py-6">
      <Clock />
      <div className="absolute bottom-0 w-full">
        <p className="text-center text-white text-lg py-2 bg-amber-600">{meal}</p>
      </div>
      {/* <div className="p-2.5 border-8 border-r-0 border-slate-600/50">
        <p className="underline text-lg font-bold underline-offset-2 text-gray-500">
          {new Date().toLocaleDateString()}
        </p>
      </div> */}
    </div>
  );
};

export default MealHeading;

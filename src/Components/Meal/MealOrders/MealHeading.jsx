import React from "react";
import Clock from "../../../Utilities/Clock/Clock";
import meal from "../../../Utilities/Hooks/GetMealTime";

const MealHeading = () => {
  return (
    <div className="">
      {/* <Clock /> */}
      <div className=" w-full">
        <p className="text-center text-lg border-2 border-gray-600 px-10 py-3">{meal}</p>
      </div>
    </div>
  );
};

export default MealHeading;

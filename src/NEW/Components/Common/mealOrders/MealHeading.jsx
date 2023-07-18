import React from "react";
import { meal } from "../../../Hooks/conditionData";

const MealHeading = () => {
  return (
    <div className="w-full bg-red-50 py-5 text-center text-red-900 text-xl">
      {meal}
    </div>
  );
};

export default MealHeading;

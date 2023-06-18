import React from "react";
import { useNavigate } from "react-router-dom";
import meal from "../../Utilities/Hooks/GetMealTime";

const MealDisplay = () => {
  const navigate = useNavigate();
  const navigateToMealOrderPage = () => {
    navigate("/meal", { replace: true });
  };
  return (
    <div className="col-span-2 h-full flex flex-col justify-center gap-y-2">
      <button
        onClick={navigateToMealOrderPage}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${meal === "Breakfast" ? "bg-green-300 border-4 border-r-0 border-green-500" : "bg-green-100 text-green-600"}`}
      >
        Breakfast
      </button>
      <button
        onClick={navigateToMealOrderPage}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${meal === "Lunch" ? "bg-green-300 border-4 border-r-0 border-green-500" : "bg-green-100 text-green-600"}`}
      >
        Lunch
      </button>
      <button
        onClick={navigateToMealOrderPage}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${meal === "Dinner" ? "bg-green-300 border-4 border-r-0 border-green-500" : "bg-green-100 text-green-600"}`}
      >
        Dinner
      </button>
    </div>
  );
};

export default MealDisplay;

import React from "react";
import { useNavigate } from "react-router-dom";

const MealDisplay = () => {
  const navigate = useNavigate();
  const navigateToMealOrderPage = () => {
    navigate("/meal/orders", { replace: true });
  };
  return (
    <div className="col-span-2 h-full flex flex-col justify-center gap-y-2">
      <button
        onClick={navigateToMealOrderPage}
        className="w-full h-1/4 text-center p-16 text-xl font-serif bg-green-100 text-green-600"
      >
        Breakfast
      </button>
      <button
        onClick={navigateToMealOrderPage}
        className="w-full h-1/4 text-center p-16 text-xl font-serif bg-green-100 text-green-600"
      >
        Lunch
      </button>
      <button
        onClick={navigateToMealOrderPage}
        className="w-full h-1/4 text-center p-16 text-xl font-serif bg-green-300"
      >
        Dinner
      </button>
    </div>
  );
};

export default MealDisplay;

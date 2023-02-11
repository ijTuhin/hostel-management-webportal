import React from "react";
import ActiveMark from "../Common/ActiveMark";
const MealTimeRoute = () => {
  return (
    <section className="border-0 py-14 rounded-2xl grid grid-cols-5 grid-rows-6 gap-6 text-lg font-medium italic">
      <div className="relative cursor-pointer flex justify-center items-center border-0 rounded-xl px-12 py-10 text-yellow-700 bg-yellow-300/50 hover:shadow-md row-span-3 col-span-4">
        Breakfast Meal
        <ActiveMark/>
      </div>
      <div className="relative cursor-not-allowed flex justify-center items-center border-0 rounded-xl px-12 py-10 text-green-800 bg-green-500/50 row-span-5 col-span-2">
        Lunch Meal
        {/* <ActiveMark/> */}
      </div>
      <div className="relative cursor-not-allowed flex justify-center items-center border-0 rounded-xl px-12 py-10 text-green-700 bg-green-400/50 row-span-2 col-span-3">
        Dinner Meal
        {/* <ActiveMark/> */}
      </div>
    </section>
  );
};

export default MealTimeRoute;

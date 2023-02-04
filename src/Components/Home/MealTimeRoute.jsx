import React from "react";

const MealTimeRoute = () => {
  return (
    <section className="border-0 py-14 px-20 rounded-2xl grid grid-cols-5 grid-rows-6 gap-4">
      <div className="flex justify-center items-center border-0 rounded-xl px-12 py-10 bg-green-400/50 hover:shadow-md row-span-3 col-span-4">
        Breakfast Meal
      </div>
      <div className="flex justify-center items-center border-0 rounded-xl px-12 py-10 bg-amber-200/50 row-span-5 col-span-2">
        Lunch Meal
      </div>
      <div className="flex justify-center items-center border-0 rounded-xl px-12 py-10 bg-amber-200/50 row-span-2 col-span-3">
        Dinner Meal
      </div>
    </section>
  );
};

export default MealTimeRoute;

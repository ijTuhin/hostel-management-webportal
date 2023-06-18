import React, { useEffect, useState } from "react";
import MealHeading from "./MealHeading";
import TableData from "./TableData";
import TableHead from "./TableHead";

const MealOrdersPage = () => {
  /* ================================================
                Set Time Condition
  ================================================ */
  const date = new Date();
  let time = date.toTimeString().split(":")[0];
  time = parseInt(time);
  const today = date.toLocaleDateString();
  date.setDate(date.getDate() + 1);
  const tomorrow = date.toLocaleDateString();
  console.log(today, time, tomorrow);
  let meal;
  let day = today;
  if (time > 8 && time < 16) {
    meal = "Lunch";
  } else if (time > 15 && time < 23) {
    meal = "Dinner";
  } else if (time === 23 || time < 9) {
    meal = "Breakfast";
    if (time === 23) {
      day = tomorrow;
    }
  }
  /* ============================================= */
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://hms-server-side.onrender.com/meal?meal=${meal}&date=${day}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data, time, day, meal);
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <MealHeading />
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <TableHead />
                <tbody>
                  {data?.map((item) => (
                    <TableData key={item._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOrdersPage;

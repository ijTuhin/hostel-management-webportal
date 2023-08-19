import React, { useEffect, useState } from "react";
import MealHeading from "./MealHeading";
import TableData from "./TableData";
import TableHead from "./TableHead";
import { date, token } from "../../../Hooks/conditionData";

export default function OrdersPage() {
  /* ================================================
                Set Time Condition
  ================================================ */
  const checkDate = new Date();
  let time = checkDate.toTimeString().split(":")[0];
  time = parseInt(time);
  const today = checkDate.toLocaleDateString();
  checkDate.setDate(checkDate.getDate() + 1);
  const tomorrow = checkDate.toLocaleDateString();
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
    fetch(
      `https://hms-server-side.onrender.com/meal?date=${new Date().getDate()}`,
      {
        headers: { Authorization: `Beared ${token}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data, time, day, meal);
  return (
    <div className="flex flex-col items-center">
      <MealHeading />
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-0.5 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <TableHead />
                <tbody>
                  {data &&
                    data?.map((item) => (
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
}

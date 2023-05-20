import React, { useEffect, useState } from "react";
import MealHeading from "./MealHeading";
import TableData from "./TableData";
import TableHead from "./TableHead";
import RecordDate from "./RecordDate";

const MealOrdersPage = () => {
  const meal = "Dinner";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/meal?meal=${meal}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col gap-y-10 items-center py-5 mx-32">
      <MealHeading meal={meal} total={data.length} />
      <div className="w-full">
        <RecordDate />
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
        {/*  */}
      </div>
    </div>
  );
};

export default MealOrdersPage;

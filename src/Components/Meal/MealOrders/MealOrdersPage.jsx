import React, { useEffect, useState } from "react";
import MealHeading from "./MealHeading";
import TableData from "./TableData";
import TableHead from "./TableHead";

const MealOrdersPage = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center mx-32">
      <MealHeading total={data.length} />
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <TableHead />
                <tbody>
                  {/* {data?.map((item) => (
                    <TableData key={item._id} item={item} />
                  ))} */}
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

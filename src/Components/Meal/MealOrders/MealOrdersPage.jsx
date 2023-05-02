import React from "react";
import MealHeading from "./MealHeading";
import MealTable from "./MealTable/MealTable";
import RecordDate from "./RecordDate";

const MealOrdersPage = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center py-5 mx-32">
      <MealHeading />
      <div className="w-full">
        <RecordDate />
        <MealTable />
      </div>
    </div>
  );
};

export default MealOrdersPage;

import React from "react";

const Credit = ({ data }) => {
  return (
    <div className="border border-b-0 border-gray-400 w-full">
      <p className="w-full py-3 bg-gray-400 text-center">Credit</p>
      <div className="h-full flex flex-col justify-between">
        <div className="px-10 py-5 space-y-2">
          <p className="flex justify-between">
            <span>Meal Bill</span>
            <span>= {data?.mealBill}/-</span>
          </p>
          <p className="flex justify-between">
            <span>Seat Rent</span>
            <span>= {data?.seatRent}/-</span>
          </p>
        </div>
        <p className="flex justify-end border-t-2 px-8 py-2">
          = {data?.credit}/-
        </p>
      </div>
    </div>
  );
};

export default Credit;

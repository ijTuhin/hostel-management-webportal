import React from "react";

const Debit = ({ data }) => {
  return (
    <div className="border border-b-0 border-gray-400 w-full">
      <p className="w-full py-3 bg-gray-400 text-center">Debit</p>
      <div className="h-full flex flex-col justify-between">
        <div className="px-10 py-5 space-y-2">
          <p className="flex justify-between">
            <span>Salary</span>
            <span>= {data.salary}/-</span>
          </p>
          <p className="flex justify-between">
            <span>Grocery</span>
            <span>= {data.grocery}/-</span>
          </p>
          <div>
            <p>Utilities</p>
            <div>
              {data.utilities.map((data) => (
                <p className="flex justify-between text-sm">
                  <span>{data.name}</span>
                  <span>= {data.bill}/-</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="flex justify-end border-t-2 px-8 py-2">
          = {data.debit}/-
        </p>
      </div>
    </div>
  );
};

export default Debit;

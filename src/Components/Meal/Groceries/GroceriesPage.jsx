import React from "react";
import AddItemForm from "./AddItemForm";
import TableData from "./TableData";
import { useLoaderData } from "react-router-dom";

const GroceriesPage = () => {
  const date = new Date().toLocaleDateString();
  const data = useLoaderData();
  return (
    <div className="px-32 py-6 w-full space-y-8">
      <AddItemForm />
      <div className="flex flex-col gap-y-3">
        <div className="py-3 w-full bg-emerald-700/25 text-center text-lg">
          List of Groceries - {date}
        </div>
        <div className="w-full flex justify-center">
          <div className="w-fit">
            {data[0].list.map((item) => (
              <TableData key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end border-t border-blue-900/50 px-1 py-1">
          <p>
            Total Cost = <span>{data[0].total} /-</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroceriesPage;

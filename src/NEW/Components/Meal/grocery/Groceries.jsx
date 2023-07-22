import React from "react";
import TableData from "../../Finance/grocery/TableData";
import TableHead from "../../Finance/grocery/TableHead";
import AddGrocery from "./AddGrocery";
import { useLoaderData } from "react-router-dom";
import { date } from "../../../Hooks/conditionData";

export default function Groceries() {
  const data = useLoaderData();
  return (
    <div className={`py-10 flex justify-evenly flex-wrap px-4`}>
      <div className="block h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar w-1/3">
        <AddGrocery />
      </div>
      <div className=" w-1/2">
        <div
          className={`${
            data[0]?.list.length === 7
              ? "h-[26rem] overflow-x-hidden overflow-y-auto no-scrollbar"
              : ""
          }`}
        >
          <div class={`flex flex-col`}>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <TableHead />
                    <tbody>
                      {data[0].date === date &&
                        data[0]?.list.map((item) => (
                          <TableData key={item._id} item={item} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end border-t border-teal-900/50 px-1 my-3">
          <p>
            Total Cost = <span>{data[0]?.total} /-</span>
          </p>
        </div>
      </div>
    </div>
  );
}

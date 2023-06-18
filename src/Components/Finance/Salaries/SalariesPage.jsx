import React from "react";
import SalaryTable from "./SalaryTable";
import { useLoaderData } from "react-router-dom";
import TableHead from "./TableHead";
import TableData from "./TableData";

const SalariesPage = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
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

export default SalariesPage;

import React from "react";
import TableHead from "../../Components/Finance/salary/TableHead";
import TableData from "../../Components/Finance/salary/TableData";
import { useLoaderData } from "react-router-dom";

export default function SalaryPage() {
  const data = useLoaderData();
  return (
    <div>
      <div class="w-full lg:px-52 px-20 py-14">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <TableHead />
                <tbody>
                  {data &&
                    data?.map((item, index) => (
                      <TableData key={item._id} index={index + 1} item={item} />
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

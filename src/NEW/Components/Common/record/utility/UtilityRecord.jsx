import React from "react";
import TableHead from "./TableHead";
import TableData from "./TableData";

export default function UtilityRecord({ name }) {
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-[1px] inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <TableHead />
              <tbody>
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
                <TableData />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

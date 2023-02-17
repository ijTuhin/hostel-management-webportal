import React from "react";
import TableData from "./TableData";
import TableHead from "./TableHead";

const OrderTable = () => {
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <TableHead/>
              <tbody>
                <TableData/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-rose-900/90 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Expenses
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Monthly Bill
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Payment Status
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Payment Date
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Previous Record
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

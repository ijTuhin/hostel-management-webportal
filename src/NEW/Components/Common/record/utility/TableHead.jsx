import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-teal-900/70 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-3 py-4 border-0 border-teal-900"
        >
          Month
        </th>
        <th
          scope="col"
          class="px-3 py-4 border-0 border-teal-900"
        >
          Total Bill
        </th>
        <th
          scope="col"
          class="px-3 py-4 border-0 border-teal-900"
        >
          Payment Date
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

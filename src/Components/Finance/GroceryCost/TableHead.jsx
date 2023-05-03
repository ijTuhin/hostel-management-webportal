import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-green-900/75 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Date
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Grocery Items
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Total Cost
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

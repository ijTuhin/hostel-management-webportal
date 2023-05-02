import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-slate-800/75 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 border border-white py-4"
        >
          Item name
        </th>
        <th
          scope="col"
          class="px-6 border border-white py-4"
        >
          Total Amount
        </th>
        <th
          scope="col"
          class="px-6 border border-white py-4"
        >
          Market rate
        </th>
        <th
          scope="col"
          class="px-6 border border-white py-4"
        >
          Total cost
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

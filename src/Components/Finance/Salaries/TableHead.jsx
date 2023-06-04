import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-violet-900/90 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Stuff's Name
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Position
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Salary
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

import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-teal-600 text-gray-50">
      <tr>
        <th
          scope="col"
          class="text-sm font-medium px-6 py-4 text-left"
        >
          Name
        </th>
        <th
          scope="col"
          class="text-sm font-medium px-6 py-4 text-left"
        >
          Position
        </th>
        <th
          scope="col"
          class="text-sm font-medium px-6 py-4 text-left"
        >
          Joining
        </th>
        <th
          scope="col"
          class="text-sm font-medium px-6 py-4 text-center"
        >
          Salary
        </th>
        <th
          scope="col"
          class="text-sm font-medium px-6 py-4 text-center"
        >
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-amber-200/75">
      <tr>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Matric Id.
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Department
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Room No.
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Order Time
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

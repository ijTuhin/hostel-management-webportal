import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-indigo-900/75 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Matric Id.
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Department
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Room No.
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Seat Rent
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-zinc-900/75 text-gray-50 text-sm font-medium">
      <tr>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Matric Id.
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Department
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Room No.
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Bill Amount
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
          Transaction ID
        </th>
        <th
          scope="col"
          class="px-6 py-4 border border-white"
        >
          Payment Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

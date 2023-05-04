import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-pink-900/75 text-gray-50 text-sm font-medium">
      <tr>
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
          Total Vacancy
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-teal-700/75 text-gray-50 text-sm font-medium">
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
          Payment Status
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Payment Date
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Package
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Total Bill
        </th>
        <th
          scope="col"
          class="px-6 py-4"
        >
          Total Coupons
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

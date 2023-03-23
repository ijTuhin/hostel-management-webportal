import React from "react";

const TableHead = () => {
  return (
    <thead class="bg-green-200 border-b border-green-100">
      <tr>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Matric ID
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Name
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
          Enrollment
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Payment
        </th>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
        >
          Role/Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

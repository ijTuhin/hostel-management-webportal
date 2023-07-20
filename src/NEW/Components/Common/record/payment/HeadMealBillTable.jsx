import React from "react";

export default function HeadMealBillTable() {
  return (
    <thead class="bg-zinc-700/75 text-gray-50 text-sm font-medium">
      <tr>
        <th scope="col" class="px-2 py-4 border border-white">
          Matric
        </th>
        <th scope="col" class="px-2 py-4 border border-white">
          Amount
        </th>
        <th scope="col" class="px-2 py-4 border border-white">
          Date
        </th>
        <th scope="col" class="px-2 py-4 border border-white">
          Trx ID
        </th>
      </tr>
    </thead>
  );
}

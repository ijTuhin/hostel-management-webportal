import React from "react";

export default function GroceryTableHead() {
  return (
    <thead class="bg-teal-900/70 text-gray-50 text-sm font-medium">
      <tr>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Date
        </th>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Total
        </th>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Itemlists
        </th>
      </tr>
    </thead>
  );
}

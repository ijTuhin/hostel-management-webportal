import React from "react";

export default function TableHead({ style }) {
  return (
    <thead
      class={`${
        style ? style : "bg-cyan-900/95"
      } text-gray-50 text-sm font-medium`}
    >
      <tr>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Item Name
        </th>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Amount
        </th>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Rate
        </th>
        <th scope="col" class="px-6 py-4 border-0 border-teal-900">
          Total costs
        </th>
      </tr>
    </thead>
  );
}

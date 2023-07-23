import React from 'react'

export default function SalaryTableData({record}) {
    return (
      <>
        <tr class="bg-white border-b border-zinc-200 transition duration-300 ease-in-out text-gray-900 hover:bg-zinc-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
            {record.month}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
            {record.salary}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase">
            {record.date}
          </td>
        </tr>
      </>
    );
  };

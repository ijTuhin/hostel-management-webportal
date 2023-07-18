import React from 'react'
import { useLoaderData } from 'react-router-dom';
import TableHead from './TableHead';
import TableData from './TableData';

export default function ManageStaff() {
  const data = useLoaderData()
  return (
    <div class="w-full py-4">
      <div class="overflow-hidden sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <TableHead />
              <tbody>
                {data && data?.map((item, index) => (
                  <TableData key={item._id} index={index + 1} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
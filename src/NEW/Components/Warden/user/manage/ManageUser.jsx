import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Heading from './Heading';
import TableData from './TableData';
import TableHead from './TableHead';

export default function ManageUser() {
  const data = useLoaderData()
  return (
    <div class="w-full flex flex-col py-4">
      <Heading total={data.length} />
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
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

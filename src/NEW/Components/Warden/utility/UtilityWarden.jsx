import React from 'react'
import { useLoaderData } from 'react-router-dom';
import TableHead from './TableHead';
import TableData from './TableData';

export default function UtilityWarden() {
  const data = useLoaderData();
  return (
    <div>
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <TableHead />
                <tbody>
                  {data && data?.map((item) => (
                    <TableData key={item.name} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
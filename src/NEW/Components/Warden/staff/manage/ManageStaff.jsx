import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom';
import TableHead from './TableHead';
import TableData from './TableData';
import UpdateModal from './UpdateModal';

export default function ManageStaff() {
  const value = useLoaderData()
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <div class="w-full py-4">
    <UpdateModal/>
      <div class="overflow-hidden sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <TableHead />
              <tbody>
                {value && value?.map((item, index) => (
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

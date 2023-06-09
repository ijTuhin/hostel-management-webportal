import React from 'react'
import { useLoaderData } from 'react-router-dom';
import TableHead from './TableHead';
import TableData from './TableData';
import StaffUpdateForm from './StaffUpdateForm';

const ManageStaffPage = () => {
    const data = useLoaderData()
    return (
      <div class="w-full lg:px-52 px-20 py-14">
        <div class="overflow-hidden sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <TableHead />
                <tbody>
                  {data?.map((item, index) => (
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

export default ManageStaffPage
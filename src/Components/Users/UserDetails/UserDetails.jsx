import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import TableData from "./TableData";
import TableHead from "./TableHead";
import SortingDropdown from "./SortingDropdown";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData()
  return (
    <div class="w-full flex flex-col px-40 py-6">
      <Heading total={data.length} />
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <TableHead />
              <tbody>
                {data && data?.map((item) => (
                  <TableData key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

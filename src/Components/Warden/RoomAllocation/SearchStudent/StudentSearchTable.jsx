import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import { useOutletContext } from "react-router-dom";

const StudentSearchTable = () => {
  const [user, setUser] = useOutletContext();
  console.log(typeof user, user.length);
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <tbody className="">
                {/* <TableData /> */}
                {user.length && (
                  <>
                    {user?.map((item) => (
                      <TableData key={item._id} item={item} />
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSearchTable;

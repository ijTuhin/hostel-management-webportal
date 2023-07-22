import React from "react";
import TableData from "./TableData";

const StudentSearchTable = ({ passData, refresh, set, user }) => {
  if (refresh) set(null);
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              {user && (
                <tbody className="">
                  {user.length > 0 ? (
                    <>
                      {user?.map((item) => (
                        <TableData key={item._id} data={passData} item={item} />
                      ))}
                    </>
                  ) : (
                    <tr>
                      <td>No data found.</td>
                    </tr>
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSearchTable;

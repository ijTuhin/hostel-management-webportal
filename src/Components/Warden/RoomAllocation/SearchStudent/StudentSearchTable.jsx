import React from "react";
import TableData from "./TableData";
import { useOutletContext } from "react-router-dom";

const StudentSearchTable = ({passData}) => {
  const [user, setUser] = useOutletContext();
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <tbody className="">
                {user.length && (
                  <>
                    {user?.map((item) => (
                      <TableData key={item._id} data={passData} item={item} />
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

import React from "react";
import TableHead from "../../Warden/Attendance/TableHead";
import TableData from "../../Warden/Attendance/TableData";

const AttendancePage = ({ date, data }) => {
  return (
    <div className="px-32">
      <div className="w-full bg-amber-300/30 text-center py-5">
        <div>
          Date: <span className="text-lg">{date}</span>
        </div>
        <button className="text-sm font-medium text-indigo-900 hover:font-semibold hover:underline decoration-2 underline-offset-2">
          Previous record
        </button>
      </div>
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <TableHead />
                <tbody>
                  {data && data?.map((item) => (
                    <TableData key={item._id} item={item} date={date} />
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

export default AttendancePage;

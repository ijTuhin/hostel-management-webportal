import React from "react";
import TableAttendance from "./TableAttendance";

const AttendancePage = () => {
  return (
    <div className="px-32 py-12">
      <div className="w-full bg-amber-300/30 text-center py-5">
        <div>
          Date: <span className="text-lg">04/05/2023</span>
        </div>
        <button className="text-sm font-medium text-indigo-900 hover:font-semibold hover:underline decoration-2 underline-offset-2">
          Previous record
        </button>
      </div>
      <TableAttendance />
    </div>
  );
};

export default AttendancePage;

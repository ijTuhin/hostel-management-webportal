import React from "react";
import TableAttendance from "./TableAttendance";

const AttendancePage = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <div className="w-full bg-amber-300/30 text-center py-5">
        <div>
          Date: <span className="text-lg">{date}</span>
        </div>
        <button className="text-sm font-medium text-indigo-900 hover:font-semibold hover:underline decoration-2 underline-offset-2">
          Previous record
        </button>
      </div>
      <TableAttendance date={date} />
    </div>
  );
};

export default AttendancePage;

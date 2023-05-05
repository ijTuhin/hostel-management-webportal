import React from "react";
import SearchBar from "./SearchBar";
import StudentSearchTable from "./SearchStudent/StudentSearchTable";
import RoomSearchTable from "./SearchRoom/RoomSearchTable";

const RoomAllocationPage = () => {
  return (
    <div className="px-32 py-12 space-y-3">
      <SearchBar />
      <StudentSearchTable />
      <RoomSearchTable/>
    </div>
  );
};

export default RoomAllocationPage;
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StudentSearchTable from "./SearchStudent/StudentSearchTable";
import RoomSearchTable from "./SearchRoom/RoomSearchTable";

const RoomAllocationPage = () => {
  const [roomData, setRoomData] = useState();
  return (
    <div className="px-32 py-12 space-y-3">
      <SearchBar />
      <StudentSearchTable passData={setRoomData} />
      <RoomSearchTable data={roomData}/>
    </div>
  );
};

export default RoomAllocationPage;

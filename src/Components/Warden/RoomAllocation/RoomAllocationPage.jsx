import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StudentSearchTable from "./SearchStudent/StudentSearchTable";
import RoomSearchTable from "./SearchRoom/RoomSearchTable";
import { TfiReload } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

const RoomAllocationPage = () => {
  const [roomData, setRoomData] = useState();
  const [refreshData, setRefreshData] = useState(false);
  const location = useLocation();
  let navigated;
  if (!refreshData) {
    navigated = location?.state?.name;
  }
  console.log(navigated);
  return (
    <div className="px-32 py-12 space-y-3">
      <div className="flex justify-between">
        <SearchBar search={navigated} />
        <button className="flex items-center gap-x-1.5 text-gray-600 hover:text-green-500"
          onClick={() => {
            setRefreshData(true);
            // window.location.reload();
          }}
        > Refresh
          <TfiReload />
        </button>
      </div>
      <StudentSearchTable refresh={refreshData} passData={setRoomData} />
      <RoomSearchTable refresh={refreshData} data={roomData} />
    </div>
  );
};

export default RoomAllocationPage;

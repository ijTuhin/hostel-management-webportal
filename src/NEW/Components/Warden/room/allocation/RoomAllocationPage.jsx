import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StudentSearchTable from "./SearchStudent/StudentSearchTable";
import RoomSearchTable from "./SearchRoom/RoomSearchTable";
import { TfiReload } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

const RoomAllocationPage = () => {
  const [roomData, setRoomData] = useState();
  const [refreshData, setRefreshData] = useState(false);
  const [input, setInput] = useState(null);
  const location = useLocation();
  let navigated;
  if (!refreshData) {
    navigated = location?.state?.name;
  }
  // console.log(navigated);
  return (
    <div className="space-y-3 py-10">
      <div className="flex justify-between">
        <SearchBar search={navigated} set={setInput}/>
        <button className="flex items-center gap-x-1.5 text-gray-600 hover:text-green-500"
          onClick={() => {
            setRefreshData(true);
          }}
        > Refresh
          <TfiReload />
        </button>
      </div>
      <StudentSearchTable refresh={refreshData} set={setInput} user={input} passData={setRoomData} />
      <RoomSearchTable refresh={refreshData} user={input} data={roomData} />
    </div>
  );
};

export default RoomAllocationPage;

import React from "react";
import TableHead from "./TableHead";
import TableData from "./TableData";

const RoomSearchTable = ({ data, refresh }) => {
  return (
    <div class="w-full flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            {!refresh && (
              <table class="min-w-full text-center">
                {data && (
                  <>
                    <TableHead />
                    <tbody>
                      {data.room?.map((item) => (
                        <TableData
                          matric={data.user}
                          previous={data.previous}
                          key={item._id}
                          item={item}
                        />
                      ))}
                    </tbody>
                  </>
                )}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSearchTable;

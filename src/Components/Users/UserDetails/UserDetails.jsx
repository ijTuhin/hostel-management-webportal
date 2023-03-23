import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import TableData from "./TableData";
import TableHead from "./TableHead";
import SortingDropdown from "./SortingDropdown";

const UserDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/student.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div class="w-full flex flex-col px-20 py-6">
      <Heading total={data.length} />
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <TableHead />
              <tbody>
                {data?.map((item) => (
                  <TableData key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import TableHead from "./TableHead";

const OrderTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("order.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div class="w-full flex flex-col">
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

export default OrderTable;

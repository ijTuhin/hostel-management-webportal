import React from "react";
import { useLoaderData } from "react-router-dom";

const MyAllNoticePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mx-32 py-10 grid grid-cols-3 gap-5">
      {data &&
        data?.map((item, index) => (
          <div
            className={`border p-5 space-y-2 ${
              index === 0
                ? `border-0  text-green-600 shadow-lg`
                : `hover:border-0  hover:shadow-lg`
            }`}
          >
            <p className="border-b py-1 text-lg font-medium">
              <span>{item.title}</span>
              <span className="flex justify-end text-base capitalize text-gray-500 font-light">
                ({item.sender.role})
              </span>
            </p>
            <p className="text-justify text-sm">
              <span>{item.notice}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default MyAllNoticePage;

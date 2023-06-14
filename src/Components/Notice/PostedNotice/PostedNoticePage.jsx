import React from "react";
import { useLoaderData } from "react-router-dom";

const PostedNoticePage = () => {
  const data = useLoaderData();
  const latest = data.length;
  console.log(data);
  return (
    <div className="mx-32 py-10 space-y-5">
      <div className="flex justify-center">
        <div className="border w-1/2 py-5 px-8 bg-teal-600 text-gray-50">
          <p className="border-b py-1 text-lg font-medium">
            <span>{data[0].title}</span>
            <span className="flex justify-end text-base capitalize text-gray-500 font-light">
              ({data[0].to})
            </span>
          </p>
          <p className="text-justify text-sm">
            <span>{data[0].notice}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 text-gray-300">
        {data && data.slice(1).map((item, index) => (
          <div className="border p-5 space-y-2 hover:border-0 hover:text-gray-500 hover:shadow-lg">
            <p className="border-b py-1 text-lg font-medium">
              <span>{item.title}</span>
              <span className="flex justify-end text-base capitalize font-light">
                ({item.to})
              </span>
            </p>
            <p className="text-justify text-sm">
              <span>{item.notice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedNoticePage;

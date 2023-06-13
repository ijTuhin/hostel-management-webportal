import React from "react";
import { useLoaderData } from "react-router-dom";
import TableData from "./TableData";

const MyAllNoticePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mx-32 py-10 grid grid-cols-3 gap-5">
      {data?.map((item, index) => (
        <div
          className={`border p-5 space-y-2 ${
            index === 0 ? `border-0  text-green-600 shadow-lg` : `hover:border-0  hover:shadow-lg`
          }`}
        >
          <p className="border-b py-1 text-lg font-medium">{item.title}</p>
          <p className="text-justify text-sm">
            <span>{item.notice}</span>
            <span className="flex justify-end text-base capitalize text-gray-500 font-light">
              ({item.sender.role})
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyAllNoticePage;
/* <div className="border p-5 space-y-2">
          {i.to}
          <p className="border-b py-1">The Notice Title Here.</p>
          <p className="text-justify">
            <span>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular. Li lingues differe solmen in li
              grammatica, li pro
            </span>
            <span className="flex justify-end">From: Warden</span>
          </p>
        </div> */

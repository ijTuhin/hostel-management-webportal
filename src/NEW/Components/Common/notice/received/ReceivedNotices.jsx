import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function ReceivedNotices() {
  const [num, setNum] = useState(0);
  const data = useLoaderData();
  console.log(data);
  return (
    <main className="py-10 flex justify-end items-start">
      <section className="border border-teal-600 bg-teal-700 rounded px-6 py-8 w-64 h-80 text-gray-300 space-y-3 fixed left-80">
        <p className=" font-semibold">{data[num]?.title}</p>
        <p className="font-poppins text-sm text-justify">
          {data[num]?.notice}
        </p>
      </section>
      <section className=" w-1/2">
        {data?.map((i, index) => (
          <div
            onClick={() => setNum(index)}
            className={`border-b p-2 cursor-pointer hover:border-teal-500 hover:text-teal-500 ${
              index === num && "border-teal-500 text-teal-500"
            }`}
          >
            <div className={`flex justify-between font-poppins`}>
              <p className=" font-semibold text-sm">{i.title}</p>
              <p className="text-xs">{i.sender.role}</p>
            </div>
            <p className={`text-[12px] font-light text-gray-400f`}>{i.date}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

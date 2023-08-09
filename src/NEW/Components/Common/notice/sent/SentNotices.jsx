import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function SentNotices() {
  const [num, setNum] = useState(0);
  const data = useLoaderData();
  console.log(data);
  return (
    <main className="py-10 flex justify-end items-start">
      <section className="border border-gray-300 bg-gray-200 rounded px-6 py-8 w-64 h-80 text-gray-700 space-y-3 fixed left-80">
        <p className="font-medium">{data[num]?.title}</p>
        <p className="font-poppins text-sm text-justify">
          {data[num]?.notice}
        </p>
      </section>
      <section className=" w-1/2">
        {data?.map((i, index) => (
          <div key={index}
            onClick={() => setNum(index)}
            className={`border-b p-2 cursor-pointer hover:border-gray-500 hover:text-gray-500 ${
              index === num ? "border-gray-500 text-gray-500" : "text-gray-300"
            }`}
          >
            <div className={`flex justify-between`}>
              <p className="font-medium">{i.title}</p>
              <p className="text-sm">{i.to}</p>
            </div>
            <p className={`text-[12px] font-light text-gray-400f`}>{i.date}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

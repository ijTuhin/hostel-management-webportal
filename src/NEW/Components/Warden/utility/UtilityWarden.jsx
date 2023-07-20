import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import TableHead from "./TableHead";
import TableData from "./TableData";
import UtilityRecord from "../../Common/record/utility/UtilityRecord";

export default function UtilityWarden() {
  const data = useLoaderData();
  const [show, setShow, id, setID] = useOutletContext();
  return (
    <div className={`w-full ${show ? "grid grid-cols-6 gap-3" : "px-20"}`}>
      <div className={`col-span-2 ${show ? "block" : "hidden"}`}>
        {show && <UtilityRecord name={id} />}
      </div>
      <div class={`flex flex-col ${show ? "col-span-4 fixed right-32" : ""}`}>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class=" inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <TableHead />
                <tbody>
                  {data &&
                    data?.map((item) => (
                      <TableData key={item.name} item={item} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

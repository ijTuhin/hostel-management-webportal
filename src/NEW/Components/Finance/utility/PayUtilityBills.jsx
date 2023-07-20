import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import TableHead from "./TableHead";
import TableData from "./TableData";
import UtilityTableHead from "../../Common/record/utility/UtilityTableHead";
import UtilityTableData from "../../Common/record/utility/UtilityTableData";
import CheckRecords from "../../Common/record/CheckRecords";
export default function PayUtilityBills() {
  const data = useLoaderData();
  const [show, setShow, id, setID] = useOutletContext();
  return (
    <div className={` ${show ? "flex justify-evenly px-4" : "px-36"}`}>
      <div
        className={`col-span-2 ${
          show
            ? "block h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar"
            : "hidden"
        }`}
      >
        {show && (
          <CheckRecords
            head={<UtilityTableHead />}
            data={<UtilityTableData />}
            type={"Total Bill"}
            name={id}
          />
        )}
      </div>
      <div className="h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar">
        <div class={`flex flex-col ${show ? "col-span-4" : ""}`}>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class=" inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <TableHead />
                  <tbody>
                    {data &&
                      data?.map((item) => (
                        <>
                          <TableData key={item.name} item={item} />
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

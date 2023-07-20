import React from "react";
import TableHead from "../../Components/Finance/salary/TableHead";
import TableData from "../../Components/Finance/salary/TableData";
import { useLoaderData, useOutletContext } from "react-router-dom";
import SalaryTableHead from "../../Components/Common/record/salary/SalaryTableHead";
import SalaryTableData from "../../Components/Common/record/salary/SalaryTableData";
import CheckRecords from "../../Components/Common/record/CheckRecords";
export default function SalaryPage() {
  const data = useLoaderData();
  const [show, setShow, id, setID] = useOutletContext();
  return (
    <div className={`py-10 ${show ? "flex justify-between px-14" : "px-36"}`}>
      <div
        className={`w-96 ${
          show
            ? "block h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar"
            : "hidden"
        }`}
      >
        {show && (
          <CheckRecords
            head={<SalaryTableHead />}
            data={<SalaryTableData />}
            name={id}
          />
        )}
      </div>
      <div
        className={` h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar`}
      >
        <div class={` flex flex-col`}>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-[1px] inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <TableHead />
                  <tbody className="">
                    {data &&
                      data?.map((item) => (
                        <>
                          <TableData key={item.name} item={item} />
                          <TableData key={item.name} item={item} />
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

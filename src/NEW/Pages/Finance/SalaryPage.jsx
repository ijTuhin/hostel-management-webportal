import React, { useEffect } from "react";
import TableHead from "../../Components/Finance/salary/TableHead";
import TableData from "../../Components/Finance/salary/TableData";
import { useLoaderData, useOutletContext } from "react-router-dom";
import SalaryTableHead from "../../Components/Common/record/salary/SalaryTableHead";
import SalaryTableData from "../../Components/Common/record/salary/SalaryTableData";
import CheckRecords from "../../Components/Common/record/CheckRecords";
import { token } from "../../Hooks/conditionData";
export default function SalaryPage() {
  const data = useLoaderData();
  const [show, setShow, id, setID, record, setRecord] = useOutletContext();
  useEffect(() => {
    console.log(id);
    fetch(id, { headers: { Authorization: `Beared ${token}` } })
      .then((res) => res.json())
      .then((i) => setRecord(i));
    console.log(record, id);
  }, [id]);
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
            data={record?.map((i, index) => (
              <SalaryTableData key={index} record={i} />
            ))}
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

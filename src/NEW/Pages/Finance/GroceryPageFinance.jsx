import React, { useEffect, useState } from "react";
import CheckRecords from "../../Components/Common/record/CheckRecords";
import GroceryTableHead from "../../Components/Common/record/grocery/GroceryTableHead";
import GroceryTableData from "../../Components/Common/record/grocery/GroceryTableData";
import { useLoaderData, useOutletContext } from "react-router-dom";
import TableHead from "../../Components/Finance/grocery/TableHead";
import TableData from "../../Components/Finance/grocery/TableData";
import { date, token } from "../../Hooks/conditionData";
import ModalView from "../../Components/Common/Modals/ModalView";
export default function GroceryPageFinance() {
  const data = useLoaderData();
  const [show, setShow, id, setID, record, setRecord] = useOutletContext();
  // const link = `http://localhost:3001/grocery?date=${id}`;
  useEffect(() => {
    console.log(id);

    fetch(id, { headers: { Authorization: `Beared ${token}` } })
      .then((res) => res.json())
      .then((i) => {
        console.log(i);
        setRecord(i);
      });
    console.log(id);
  }, [id]);
  return (
    <div className={`py-10 flex justify-evenly px-4`}>
      <ModalView
        modalComponent={
          <div className="h-96 overflow-x-hidden overflow-y-auto no-scrollbar">
            <div class={`flex flex-col`}>
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                      <TableHead style={"bg-stone-800 text-teal-500"} />
                      <tbody>
                        {id?.list?.map((i, index) => (
                          <>
                            <tr
                              class={`bg-transparent text-white hover:bg-zinc-50 border-zinc-200 border-b transition duration-300 ease-in-out`}
                            >
                              <td class="px-3 py-2.5 whitespace-nowrap text-xs font-medium capitalize">
                                {i?.name}
                              </td>
                              <td class="px-3 py-2.5 whitespace-nowrap text-xs font-medium capitalize">
                                {i?.amount} {i?.unit}
                              </td>
                              <td class="px-3 py-2.5 whitespace-nowrap text-xs font-medium capitalize">
                                {i?.rate}/-
                              </td>
                              <td class="px-3 py-2.5 whitespace-nowrap text-xs font-medium capitalize">
                                {i?.price}/-
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className="block h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar w-1/3">
        <CheckRecords
          head={<GroceryTableHead />}
          data={data?.map((i, index) => {
            return <GroceryTableData key={index} item={i} /* set={setID} */ />;
          })}
          type={"Total Bill"}
          name={id}
        />
      </div>
      <div className="h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar w-1/2">
        <div class={`flex flex-col`}>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class=" inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <TableHead />
                  <tbody>
                    {data[0].date === date &&
                      data[0]?.list.map((item) => (
                        <TableData key={item._id} item={item} />
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

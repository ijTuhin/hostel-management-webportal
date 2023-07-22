import React from "react";
import ModalView from "../../Modals/ModalView";
import TableHead from "../../../Finance/grocery/TableHead";
import TableData from "../../../Finance/grocery/TableData";
import ModalTableData from "../../../Finance/grocery/ModalTableData";

export default function ViewItemsModal({ item }) {
console.log(item)
  return (
    <ModalView
      modalComponent={
        <div className="h-96 overflow-x-hidden overflow-y-auto no-scrollbar">
          <div class={`flex flex-col`}>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <TableHead style={"bg-teal-700"} />
                    <tbody>
                      {item?.map((i, index) => (
                        <ModalTableData
                          style={"bg-transparent text-teal-400"}
                          key={index}
                          data={i}
                        />
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
  );
}

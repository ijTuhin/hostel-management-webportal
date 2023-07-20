import React from "react";
import HeadSeatRentTable from "./HeadSeatRentTable";
import DataSeatRentTable from "./DataSeatRentTable";
import ModalView from "../../Modals/ModalView";

export default function SeatRentRecordModal() {
  return (
    <ModalView
      modalComponent={
        <div className="h-96 overflow-x-hidden overflow-y-auto no-scrollbar">
          <div class={`flex flex-col`}>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <HeadSeatRentTable style={"bg-teal-700"} />
                    <tbody>
                      <DataSeatRentTable
                        style={"bg-transparent text-teal-400"}
                      />
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

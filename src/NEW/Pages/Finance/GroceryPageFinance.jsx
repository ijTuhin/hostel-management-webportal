import React from "react";
import CheckRecords from "../../Components/Common/record/CheckRecords";
import GroceryTableHead from "../../Components/Common/record/grocery/GroceryTableHead";
import GroceryTableData from "../../Components/Common/record/grocery/GroceryTableData";
import { useOutletContext } from "react-router-dom";
import TableHead from "../../Components/Finance/grocery/TableHead";
import TableData from "../../Components/Finance/grocery/TableData";
import ModalView from "../../Components/Common/Modals/ModalView"
import ViewItemsModal from "../../Components/Common/record/grocery/ViewItemsModal";
export default function GroceryPageFinance() {
  const [show, setShow, id, setID] = useOutletContext();
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <div className={`py-10 flex justify-evenly px-4`}>
      <ViewItemsModal/>
      <div className="block h-[35rem] overflow-x-hidden overflow-y-auto no-scrollbar w-1/3">
        <CheckRecords
          head={<GroceryTableHead />}
          data={<GroceryTableData />}
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
                    <TableData />
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

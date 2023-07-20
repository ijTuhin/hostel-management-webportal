import React from "react";
import { useOutletContext } from "react-router-dom";
import ModalToPost from "../../Common/Modals/ModalToPost";

export default function EditRequests() {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  // setUpload(null);
  // setData(null);
  const handleUpload = () => {
    setUpload("Changed");
    console.log(upload);
  };
  const handleOpen = () => setOpen(true);

  return (
    <main className="py-4 text-gray-300">
      <ModalToPost
        operate={handleUpload}
        item=""
        modalComponent={
          <div className="space-y-3">
            <p className="text-sm">
              <span className="font-semibold mr-3">Phone:</span>
              h;gisgsig'sgs\gpi[pgi[ipdigsdgsm
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">Address:</span>
              h;gisgsig'sgs\gpi[pgi[ipdigsdgsm
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">Thana:</span>
              h;gisgsig'sgs\gpi[pgi[ipdigsdgsm
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">District:</span>
              h;gisgsig'sgs\gpi[pgi[ipdigsdgsm
            </p>
          </div>
        }
      ></ModalToPost>
      <div className="w-full flex justify-between place-items-center p-3.5 border font-poppins bg-teal-800">
        <p className="space-x-5 text-sm">
          <span>01.</span>
          <span>c183275</span>
          <span>Room No.401</span>
        </p>
        <button
          onClick={() => {
            setOpen(true);
            setUpload(null);
          }}
          className="px-3 py-1.5 border rounded hover:bg-teal-900"
        >
          Check
        </button>
      </div>
    </main>
  );
}

import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import ModalToPost from "../../Common/Modals/ModalToPost";

export default function EditRequests() {
  const item = useLoaderData();
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  // setUpload(null);
  // setData(null);
  console.log(item);
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
              {data?.phone ? data?.phone : "no changes made"}
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">Address:</span>
              {data?.address ? data?.address : "no changes made"}
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">Thana:</span>
              {data?.thana ? data?.thana : "no changes made"}
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-3">District:</span>
              {data?.district ? data?.district : "no changes made"}
            </p>
          </div>
        }
      ></ModalToPost>
      {item?.edit?.map((i, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-between place-items-center p-3.5 border font-poppins bg-teal-800"
          >
            <p className="space-x-5 text-sm">
              <span>{index+1}</span>
              <span>{i?.user?.matric}</span>
              <span>Room No.{i?.user?.room?.room}</span>
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setUpload(null);
                setData(i)
              }}
              className="px-3 py-1.5 border rounded hover:bg-teal-900"
            >
              Check
            </button>
          </div>
        );
      })}
    </main>
  );
}

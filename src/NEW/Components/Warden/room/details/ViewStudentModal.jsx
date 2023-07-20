import React from "react";
import ModalView from "../../../Common/Modals/ModalView";
import { useOutletContext } from "react-router-dom";

export default function ViewStudentModal() {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  return (
    <ModalView
      item=""
      modalComponent={
        <section className="w-full">
          <p className="mb-2 pb-1 mx-2 text-teal-400 border-teal-400 border-b">
            User information
          </p>
          <div className="text-sm grid grid-cols-2 gap-y-2">
            <p className="col-span-2">
              <span className="font-semibold px-2 text-gray-400">Name:</span>
              {data?.name}
            </p>
            <p>
              <span className="font-semibold px-2 text-gray-400">Matric:</span>
              {data?.matric}
            </p>
            <p>
              <span className="font-semibold px-2 text-gray-400">
                Department:
              </span>
              {data?.dept}
            </p>
            <p>
              <span className="font-semibold px-2 text-gray-400">
                Phone No:
              </span>
              {data?.phone}
            </p>
            <p>
              <span className="font-semibold px-2 text-gray-400">
                Semester enrolled:
              </span>
              {data?.sem}
            </p>
          </div>
        </section>
      }
    />
  );
}

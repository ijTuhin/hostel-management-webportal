import React, { useState } from "react";
import ModalToPost from "../../../Common/Modals/ModalToPost";
import { useOutletContext } from "react-router-dom";
import { token } from "../../../../Hooks/conditionData";

export default function UpdateModal() {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  // setUpload(null);
  // console.log(data)
  const handleUpdate = () => {
    if (upload?.name === "") delete upload.name;
    if (upload?.position === "") delete upload.position;
    if (upload?.salary === "") delete upload.salary;
    if (upload?.phone === "") delete upload.phone;
    console.log(upload);
    fetch(`https://hms-server-side.onrender.com/staff/${data?._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
      body: JSON.stringify(upload),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });
  };
  return (
    <ModalToPost
      operate={handleUpdate}
      item=""
      modalComponent={
        <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs">
          <p>Name</p>
          <p>Position</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                name: e.target.value,
              });
            }}
            type="text"
            placeholder={data?.name}
            className="bg-transparent p-2 border"
            name="name"
            id=""
          />
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                position: e.target.value,
              });
            }}
            type="text"
            placeholder={data?.position}
            className="bg-transparent p-2 border"
            name="position"
            id=""
          />
          <p>Phone</p>
          <p>Salary</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                phone: e.target.value,
              });
            }}
            type="text"
            placeholder={data?.phone}
            className="bg-transparent p-2 border"
            name="phone"
            id=""
          />
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                salary: e.target.value,
              });
            }}
            type="text"
            placeholder={data?.salary}
            className="bg-transparent p-2 border"
            name="salary"
            id=""
          />
        </div>
      }
    />
  );
}

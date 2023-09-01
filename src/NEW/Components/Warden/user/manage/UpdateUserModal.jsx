import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import ModalToPost from "../../../Common/Modals/ModalToPost";
import { token } from "../../../../Hooks/conditionData";

export default function UpdateUserModal() {
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  const value = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  let navigated = location?.state?.name;
  navigated = value.find((i) => i._id === navigated);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (upload?.name === "") delete upload.name;
    if (upload?.dept === "") delete upload.dept;
    if (upload?.sem === "") delete upload.sem;
    if (upload?.program === "") delete upload.program;
    if (upload?.matric === "") delete upload.matric;
    if (upload?.phone === "") delete upload.phone;
    if (upload?.address === "") delete upload.address;
    if (upload?.thana === "") delete upload.thana;
    if (upload?.district === "") delete upload.district;
    const link = `http://localhost:3001/user/update/${navigated?._id}`;
    console.log(upload, link);
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(upload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DB Success", data);
      })
      .catch((e) => console.log(e));

    navigate("/user", { replace: true });
  };
  return (
    <form
      onSubmit={handleUpdate}
      className="px-20 py-8 text-xs w-full grid grid-cols-5 gap-x-5"
    >
      <div className="col-span-4">
        <p className="my-2.5 text-lg pb-1 text-teal-500 border-teal-500 border-b">
          Current information of{" "}
          <span className="capitalize">{navigated?.matric}</span>
        </p>
        <div className="w-[80%] grid grid-cols-4 gap-x-2 gap-y-2.5 mb-1.5">
          <p>Name</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                name: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.name}
            className="bg-transparent p-2 border border-gray-400 col-span-3"
            name="name"
            id="1"
          />
          <p>Gsuit</p>
          <input
            readOnly
            value={navigated?.email}
            type="text"
            className="bg-transparent p-2 border col-span-3 text-gray-500 outline-none"
            name="position"
            id="2"
          />

          <p>Enrolled on</p>
          <input
            type="text"
            readOnly
            value={navigated?.enroll}
            className="bg-transparent p-2 border col-span-3 text-gray-500 outline-none"
            name="salary"
            id="12"
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-start  mt-10">
        <button
          type="submit"
          className="h-10 text-center font-semibold bg-teal-600 text-white hover:bg-teal-700 py-3 border rounded"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/user");
          }}
          className="h-10 text-center font-semibold text-teal-600 hover:text-teal-500 py-2"
        >
          Cancel
        </button>
      </div>
      <div className="col-span-2">
        <p className="my-2.5 text-lg pb-1 text-teal-500 border-teal-500 border-b">
          Academic
        </p>
        <div className="grid grid-cols-1 gap-x-2 gap-y-2.5 mb-2.5">
          <p>Department</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                dept: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.dept}
            className="bg-transparent p-2 border border-gray-400 "
            name="name"
            id="4"
          />
          <p>Matric</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                matric: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.matric}
            className="bg-transparent p-2 border border-gray-400 "
            name="position"
            id="5"
          />
          <p>Program</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                program: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.program}
            className="bg-transparent p-2 border border-gray-400 "
            name="phone"
            id="6"
          />
          <p>Enrolled semester</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                sem: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.sem}
            className="bg-transparent p-2 border border-gray-400 "
            name="salary"
            id="7"
          />
        </div>
      </div>
      <div className="col-span-2">
        <p className="my-2.5 text-lg pb-1 text-teal-500 border-teal-500 border-b">
          Personal
        </p>
        <div className="grid grid-cols-1 gap-x-2 gap-y-2.5 ">
          <p>Address</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                address: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.address}
            className="bg-transparent p-2 border border-gray-400 "
            name="name"
            id="8"
          />
          <p>District</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                district: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.district}
            className="bg-transparent p-2 border border-gray-400 "
            name="name"
            id="9"
          />
          <p>Thana</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                thana: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.thana}
            className="bg-transparent p-2 border border-gray-400 "
            name="position"
            id="10"
          />
          <p>Phone</p>
          <input
            onKeyUp={(e) => {
              setUpload({
                ...upload,
                phone: e.target.value,
              });
            }}
            type="text"
            placeholder={navigated?.phone}
            className="bg-transparent p-2 border border-gray-400 "
            name="phone"
            id="11"
          />
        </div>
      </div>
    </form>
  );
}

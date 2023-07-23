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
  const [open, setOpen, data, setData, upload, setUpload, error, setError] =
    useOutletContext();
  const value = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  let navigated = location?.state?.name;
  navigated = value.find((i) => i._id === navigated);
  function passwordValid(value) {
    const reqex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    return reqex.test(value);
  }
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
    if (!upload?.password || passwordValid(upload?.password)) {
      const link = `http://localhost:3001/user/update/${navigated?._id}`;
      console.log(upload,navigated._id, link);
      fetch(link, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(upload),
      })
        .then((response) => {
          response.json();
          console.log(response.json());
        })
        .then((data) => {
          console.log("DB Success", data);
          navigate("/user", { replace: true });
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <form onSubmit={handleUpdate} className="text-xs px-36 py-8">
      <p className="my-2.5 text-base pb-1 text-teal-400 border-teal-400 border-b">
        Current information of {navigated?.matric}
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
          className="bg-transparent p-2 border col-span-3"
          name="name"
          id="1"
        />
        <p>Gsuit</p>
        <input
          readOnly
          value={navigated?.email}
          type="text"
          className="bg-transparent p-2 border col-span-3 border-gray-500 text-gray-500 outline-none"
          name="position"
          id="2"
        />
        <p>Password</p>
        <input
          onChange={(e) => {
            if (!passwordValid(e.target.value)) {
              setError(
                <p className="text-center text-[10px] text-red-500 w-full">
                  Password not strong enough!!
                </p>
              );
              setUpload({
                ...upload,
                password: null,
              });
            } else {
              setError(null);
              setUpload({
                ...upload,
                password: e.target.value,
              });
            }
          }}
          type="password"
          placeholder="########"
          className="bg-transparent p-2 border col-span-3"
          name="position"
          id="3"
        />
      </div>
      {error}
      <p className="my-2.5 text-base pb-1 text-teal-400 border-teal-400 border-b">
        Academic
      </p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 mb-2.5">
        <p>Department</p>
        <p>Matric</p>
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              dept: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.dept}
          className="bg-transparent p-2 border "
          name="name"
          id="4"
        />
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              matric: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.matric}
          className="bg-transparent p-2 border "
          name="position"
          id="5"
        />
        <p>Program</p>
        <p>Enrolled semester</p>
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              program: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.program}
          className="bg-transparent p-2 border "
          name="phone"
          id="6"
        />
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              sem: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.sem}
          className="bg-transparent p-2 border "
          name="salary"
          id="7"
        />
      </div>
      <p className="my-2.5 text-base pb-1 text-teal-400 border-teal-400 border-b">
        Personal
      </p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 ">
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
          className="bg-transparent p-2 border col-span-2"
          name="name"
          id="8"
        />
        <p>District</p>
        <p>Thana</p>
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              district: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.district}
          className="bg-transparent p-2 border "
          name="name"
          id="9"
        />
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              thana: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.thana}
          className="bg-transparent p-2 border "
          name="position"
          id="10"
        />
        <p>Phone</p>
        <p>Enrolled on</p>
        <input
          onKeyUp={(e) => {
            setUpload({
              ...upload,
              phone: e.target.value,
            });
          }}
          type="text"
          placeholder={navigated?.phone}
          className="bg-transparent p-2 border "
          name="phone"
          id="11"
        />
        <input
          type="text"
          readOnly
          value={navigated?.enroll}
          className="bg-transparent p-2 border border-gray-500 text-gray-500 outline-none"
          name="salary"
          id="12"
        />
      </div>
      <button
        type="submit"
        className="w-full text-center font-semibold bg-teal-700 text-white hover:bg-teal-800 mb-24 py-3 mt-5 border rounded"
      >
        Update
      </button>
    </form>
  );
}

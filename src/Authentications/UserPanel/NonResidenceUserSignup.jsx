import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserSlash } from "react-icons/fa";

const NonResidenceUserSignup = () => {
  const [guest, setGuest] = useState(false);
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/non-residence-student-registration", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="flex justify-center mt-[10%]">
      <div className="border-0 shadow-lg space-y-3 bg-white pb-16 pt-12 px-16">
        <div className="flex justify-start items-center gap-x-2 text-xl font-bold font-serif">
          <span>
            <FaUserSlash />
          </span>
          Non-Residence Registration {guest ? "(Guest)" : "(Student)"}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <div className="space-x-2">
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
            {guest ? (
              <input
                className="border-b-2 border-slate-500 px-2 py-1"
                {...register("nid", { required: true })}
                placeholder="Enter your NID"
              />
            ) : (
              <input
                className="border-b-2 border-slate-500 px-2 py-1"
                {...register("matricID", { required: true })}
                placeholder="Enter your matric Id"
              />
            )}
          </div>
          <div className="space-x-2">
            <input
              id="name"
              className="border-b-2 border-slate-500 px-2 py-1"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
            <input
              id="phone"
              className="border-b-2 border-slate-500 px-2 py-1"
              {...register("phone", { required: true })}
              placeholder="Phone number"
            />
          </div>
          <div className="space-x-2">
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="password"
              name=""
              id=""
              {...register("password", { required: true })}
              placeholder="Confirm Password"
            />
          </div>
          {guest ? (
            <div className="space-x-2">
              <input
                id="referenceID"
                className="border-b-2 border-slate-500 px-2 py-1"
                {...register("referenceID", { required: true })}
                placeholder="Reference residence Id"
              />
              <input
                id="relation"
                className="border-b-2 border-slate-500 px-2 py-1"
                {...register("relation", { required: true })}
                placeholder="Relation with residence"
              />
            </div>
          ) : (
            <div className="flex justify-start items-center gap-x-2">
              <input
                id="batch"
                className="border-b-2 border-slate-500 px-2 py-1"
                {...register("batch", { required: true })}
                placeholder="Enter your batch"
              />
              <div>
                <select
                  className="py-1 text-gray-600 border-b-2 border-slate-500"
                  {...register("department", { required: true })}
                >
                  <option value="Choose Your Department">
                    Choose Your Department
                  </option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="EB">EB</option>
                  <option value="ELL">ELL</option>
                  <option value="BBA">BBA</option>
                </select>
              </div>
            </div>
          )}
          <div className="text-gray-600 pt-1.5 pl-1">
            <span>Choose your picture:</span>
            <input className="text-xs pl-1.5" type="file" {...register("userImg", { required: true })} name="" id="" />
          </div>
          <div className="flex justify-end mt-2.5 gap-x-1 items-end">
            <input
              onChange={(e) => setGuest(!guest)}
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-xs">Guest?</p>
          </div>
          <button
            type="submit"
            className="border-0 w-full bg-slate-600 hover:bg-slate-800 text-gray-200 rounded mt-2.5 px-3 py-1.5"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NonResidenceUserSignup;

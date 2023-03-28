import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const AcademicData = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full h-full py-14 px-40 bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <div>
            <p className="text-xl font-semibold font-serif text-gray-600">
              Student Information
            </p>
            <p className="text-sm text-gray-400">(Individual data)</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Enter name"
              {...register("name")}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Enter Gsuite"
              {...register("Gsuite", { required: true })}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Matric ID"
              {...register("matric")}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Semester"
              {...register("sem")}
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <p className="text-xl font-semibold font-serif text-gray-600">
            Department
          </p>
          <select
            {...register("dept")}
            id="countries"
            className="border-2 border-slate-300 outline-teal-500 bg-white p-2 w-80 rounded"
          >
            <option disabled>Choose Department</option>
            <option value="CSE">CSE</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="EEE">EEE</option>
            <option value="BBA">BBA</option>
            <option value="EB">EB</option>
            <option value="ELL">ELL</option>
          </select>
          {/* <input
            className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
            type="text"
            name=""
            id=""
          /> */}
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <div>
            <p className="text-xl font-semibold font-serif text-gray-600">
              Academic Session
            </p>
            <p className="text-sm text-gray-400">
              (Current session and the session to complete the program)
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Current Session"
              {...register("current")}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              placeholder="Last Session"
              {...register("last")}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="border-2 rounded-md px-6 py-1.5 bg-teal-600 hover:bg-teal-700 text-white">
            <NavLink to="/users/create/personal">Next</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicData;

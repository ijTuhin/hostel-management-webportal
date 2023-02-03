import React from "react";
import { useFormContext } from "react-hook-form";

const StudentSignupForm = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="space-x-2">
        <input
          className="border-b-2 border-slate-500 px-2 py-1"
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
        <input
          className="border-b-2 border-slate-500 px-2 py-1"
          {...register("matricID", { required: true })}
          placeholder="Enter your matric Id"
        />
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
    </div>
  );
};

export default StudentSignupForm;

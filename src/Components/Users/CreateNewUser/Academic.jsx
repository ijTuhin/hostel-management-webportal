import React from "react";
import { useFormContext } from "react-hook-form";

const Academic = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-y-6">
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Enter Gsuite"
        {...register("Gsuite", { required: true })}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Matric ID"
        {...register("matric")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Semester"
        {...register("sem")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Current Session"
        {...register("current")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Last Session"
        {...register("last")}
      />
      <select {...register("dept")}
        id="countries"
        className="text-gray-500 text-sm block w-full px-1.5 py-2 border border-gray-600 rounded"
      >
        <option disabled>Choose Department</option>
        <option value="CSE">CSE</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="EEE">EEE</option>
        <option value="BBA">BBA</option>
        <option value="EB">EB</option>
        <option value="ELL">ELL</option>
      </select>
    </div>
  );
};

export default Academic;

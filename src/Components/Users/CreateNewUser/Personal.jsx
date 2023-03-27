import React from "react";
import { useFormContext } from "react-hook-form";

const Personal = () => {
  const { register } = useFormContext();

  
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const enrolled = date + "/" + month + "/" + year;
  /* const enroll = new Date().toISOString().slice(0, 10); YYYY-MM-DD */
  
  return (
    <div className="flex flex-col gap-y-6">
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Enter name"
        {...register("name")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="District"
        {...register("district")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Thana"
        {...register("thana")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Address"
        {...register("address")}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Phone number"
        {...register("phone")}
      />
      <input
        value={enrolled}
        className="text-sm outline-none p-2 border-b border-gray-600"
        placeholder="Enrollment date"
        {...register("enrolled")}
      />
    </div>
  );
};

export default Personal;

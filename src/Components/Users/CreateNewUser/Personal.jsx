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
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="Enter name"
        {...register("name", { required: true })}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="District"
        {...register("district", { required: true })}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="Thana"
        {...register("thana", { required: true })}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="Address"
        {...register("address", { required: true })}
      />
      <input
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="Phone number"
        {...register("phone", { required: true })}
      />
      <input
        value={enrolled}
        className="text-sm outline-none p-2 border-b border-gray-400"
        placeholder="Enrollment date"
        {...register("enrolled", { required: true })}
      />
    </div>
  );
};

export default Personal;

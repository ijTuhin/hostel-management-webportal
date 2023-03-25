import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const enroll = new Date()
  return (
    <div className="px-[27rem] py-16 space-y-5">
        <p className="italic text-xl font-medium text-gray-500">*** User Information ***</p>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-5">
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Enter Gsuite"
              {...register("Gsuite", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Matric ID"
              {...register("matric", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Semester"
              {...register("sem", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Current Session"
              {...register("current", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Last Session"
              {...register("last", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Department"
              {...register("dept", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-y-5">
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="District"
              {...register("district", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Thana"
              {...register("thana", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Address"
              {...register("address", { required: true })}
            />
            <input
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Phone number"
              {...register("phone", { required: true })}
            />
            <input defaultValue={enroll}
              className="text-sm outline-none px-2 py-1 border-b border-gray-400"
              placeholder="Enrollment date"
              {...register("enrolled", { required: true })}
            />
          </div>
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="w-full flex justify-end">
          <button className="px-4 py-1.5 rounded bg-gray-300 text-white hover:bg-gray-600" type="submit">Insert</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

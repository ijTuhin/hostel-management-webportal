import React from "react";
import { useFormContext } from "react-hook-form";

const GuestSignupForm = () => {
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
          {...register("nid", { required: true })}
          placeholder="Enter your NID"
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
    </div>
  );
};

export default GuestSignupForm;

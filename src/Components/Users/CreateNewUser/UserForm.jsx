import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Academic from "./Academic";
import Personal from "./Personal";

const UserForm = ({setData, setChange}) => {
  const methods = useForm();
  const onSubmit = (data) => {
    setData(data);
    setChange(true);
  }
  return (
    <div className="px-[27rem] py-16 space-y-5">
      <p className="italic text-xl font-medium text-gray-500">
        *** User Information ***
      </p>
      <FormProvider {...methods}>
        <form className="space-y-2" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <Academic/>
            <Personal/>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="px-4 py-1.5 rounded bg-gray-300 text-white hover:bg-gray-600"
              type="submit"
            >
              Insert
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default UserForm;

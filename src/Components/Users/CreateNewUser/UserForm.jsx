import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Academic from "./Academic";
import Personal from "./Personal";

const UserForm = ({ setData, setChange }) => {
  const methods = useForm();
  const onSubmit = (data) => {
    setData(data);
    setChange(true);
  };
  return (
    <div className="w-full bg-emerald-600/25">
      <div className="mx-[27rem] px-16 py-20 bg-white space-y-12 shadow-lg">
        <p className="italic text-xl font-medium text-gray-500">
          *** User Information ***
        </p>
        <FormProvider {...methods}>
          <form className="space-y-2" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <Academic />
              <Personal />
            </div>
            <div className="w-full flex justify-end">
              <button
                className="px-4 py-1.5 rounded bg-emerald-600/25 hover:bg-emerald-600/75 text-white"
                type="submit"
              >
                Insert
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default UserForm;

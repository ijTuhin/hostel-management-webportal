import React, { useState } from "react";
import Create from "./Create";
import UserForm from "./UserForm";

const CreateNewUser = () => {
  const [data, setData] = useState("");
  const [change, setChange] = useState(true);
  return (
    <div className="flex justify-between h-[35rem]">
      <UserForm setData={setData} setChange={setChange} />
      <div className={`w-full px-20 flex items-center ${!change ? "hidden" : "visible"}`}><Create data={data}/></div>
    </div>
  );
};

export default CreateNewUser;

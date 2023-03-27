import React, { useState } from "react";
import Create from "./Create";
import SideMenu from "./SideMenu";
import UserForm from "./UserForm";

const CreateUser = () => {
  const [data, setData] = useState("");
  const [change, setChange] = useState(true);
  return (
    <div>
      <SideMenu/>
      {/* <div className="flex justify-between h-[35rem]">
        <UserForm setData={setData} setChange={setChange} />
        <div
          className={`w-full px-20 flex items-center ${
            !change ? "hidden" : "visible"
          }`}
        >
          <Create data={data} />
        </div>
      </div> */}
    </div>
  );
};

export default CreateUser;

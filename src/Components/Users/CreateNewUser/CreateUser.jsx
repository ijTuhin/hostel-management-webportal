import React, { useState } from "react";
import Drawers from "../../../Utilities/Drawer/Drawers";

const CreateUser = () => {
  const [data, setData] = useState("");
  const [change, setChange] = useState(true);
  return (
    <div>
      <Drawers item={4} title={null} />
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

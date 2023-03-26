import React, { useState } from "react";
import DataOverview from "./DataOverview";
import UserForm from "./UserForm";

const CreateNewUser = () => {
  const [data, setData] = useState("");
  const [change, setChange] = useState(false);
  return (
    <div>
      {!change ? (
        <UserForm setData={setData} setChange={setChange} />
      ) : (
        <DataOverview data={data} />
      )}
    </div>
  );
};

export default CreateNewUser;

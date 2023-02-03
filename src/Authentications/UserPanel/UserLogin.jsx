import React, { useState } from "react";
import LoginNonResidence from "../NonResidence/LoginNonResidence";
import LoginResidence from "../Residence/LoginResidence";

const UserLogin = () => {
  const [residence, setResidence] = useState(true);
  return (
    <div>
      <div className="flex justify-end p-5">
        <button onClick={() => setResidence((prev) => !prev)}>
          {residence ? "Not a residence?" : "Are you a residence?"}
        </button>
      </div>
      {residence ? <LoginResidence /> : <LoginNonResidence />}
    </div>
  );
};

export default UserLogin;

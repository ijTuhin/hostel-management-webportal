import React, { useState } from "react";
import NonResidenceUserLogin from "./NonResidenceUserLogin";
import ResidenceUserLogin from "./ResidenceUserLogin";

const UserLogin = () => {
  const [residence, setResidence] = useState(true);
  return (
    <div>
      <div className="flex justify-end p-5">
        <button onClick={() => setResidence((prev) => !prev)}>
          {residence ? "Not a residence?" : "Not a residence?"}
        </button>
      </div>
      {residence ? <ResidenceUserLogin /> : <NonResidenceUserLogin />}
    </div>
  );
};

export default UserLogin;

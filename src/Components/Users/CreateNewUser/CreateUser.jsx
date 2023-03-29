import React, { useState } from "react";
import Drawers from "../../../Utilities/Drawer/Drawers";

const CreateUser = () => {
  const [data, setData] = useState("");
  const [change, setChange] = useState(true);
  return (
    <div>
      <Drawers item={4} title={null} />
    </div>
  );
};

export default CreateUser;

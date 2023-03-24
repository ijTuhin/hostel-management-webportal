import React, { useContext, useState } from "react";
import { Audio } from "react-loader-spinner";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../Authentications/Authenticate/UserContext";
import loadingLogo from '../../Images/iiuc-logo.png';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1e3a8a",
  borderWidth: "5px",
};
const Loading = () => {
  const { loading } = useContext(AuthContext);
  const [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading w-screen h-screen text-blue-900 font-medium flex flex-col justify-center items-center gap-3">
      <img src={loadingLogo} className="w-20 h-20" alt="" />
      <p className="mb-10 text-xl">Hostel Management</p>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;

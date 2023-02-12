import React, { useContext, useState } from "react";
import { Audio } from "react-loader-spinner";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../Authentications/Authenticate/UserContext";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4ade80",
  borderWidth: "5px",
};
const Loading = () => {
  const { loading } = useContext(AuthContext);
  const [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading w-screen h-screen text-green-500 font-medium flex flex-col justify-center items-center gap-10">
      <p>Please wait...</p>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}
    </div>
  );
};

export default Loading;

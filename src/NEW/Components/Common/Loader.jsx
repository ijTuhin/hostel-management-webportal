import React from "react";
import { ClipLoader } from "react-spinners";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4ade80",
  borderWidth: "5px",
};
const Loader = () => {
  const { loading } = useAuthUser();
  return (
    <div className="sweet-loading w-screen h-screen text-gray-200 font-medium flex flex-col justify-center items-center gap-3 bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-handlee font-semibold text-gray-400">
          Ostello
        </p>
        <p className="text-xl font-handlee font-semibold text-gray-400">
          House Management
        </p>
      </div>
      <ClipLoader
        color="#f1f5f9"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

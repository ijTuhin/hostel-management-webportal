import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const FullDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matric = location?.state?.name;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://hms-server-side.onrender.com/user/update?matric=${matric}`, {
      headers: { Authorization: `Beared ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="p-10">
      <button
        onClick={() => navigate("/users/manage-user", { replace: true })}
        className="flex items-center justify-start gap-x-2 hover:text-green-500"
      >
        <IoReturnUpBackOutline /> Back
      </button>
      <div className="flex justify-center">
        <UpdateForm item={data} />
      </div>
    </div>
  );
};

export default FullDetails;

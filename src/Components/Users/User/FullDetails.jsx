import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableData from "./TableData";

const FullDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matric = location?.state?.name;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/user?matric=${matric}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div>
      <TableData item={data} />
      </div>
      <button onClick={() => navigate("/users/manage-user", { replace: true })}>
        Back
      </button>
    </div>
  );
};

export default FullDetails;

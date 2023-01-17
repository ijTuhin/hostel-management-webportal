import React from "react";

const DataBox = ({data}) => {
  return (
    <div className="border border-gray-600 w-fit p-4 font-mono">
      <p>{data.emailId}</p>
      <p>{data.password}</p>
    </div>
  );
};

export default DataBox;

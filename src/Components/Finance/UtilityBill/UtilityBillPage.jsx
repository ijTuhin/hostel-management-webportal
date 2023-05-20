import React from "react";
import UtilityTable from "./UtilityTable";
import { useLoaderData } from "react-router-dom";

const UtilityBillPage = () => {
  const data = useLoaderData();
  const updateBillRecord = () => {
    /* const bill = {};
    fetch(`http://localhost:5000/utility-bill`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      }); */

    /* fetch(`http://localhost:5000/utility-record`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });

    window.location.reload(true); */
  };
  return (
    <div className="px-32 py-12">
      <button
        onClick={updateBillRecord}
        className="border-2 rounded-lg px-3.5 py-2"
      >
        Change Month
      </button>
      <UtilityTable />
    </div>
  );
};

export default UtilityBillPage;

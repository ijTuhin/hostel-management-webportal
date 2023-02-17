import React from "react";
import PaymentTable from "./PaymentTable";

const PaymentHistory = () => {
  return (
    <div className="py-24 flex flex-col items-center gap-y-5 px-48">
      {/* <h2>Order Summary</h2> */}
      <PaymentTable />
    </div>
  );
};

export default PaymentHistory;

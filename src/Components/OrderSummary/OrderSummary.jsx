import React from "react";
import OrderTable from "./OrderTable";
import TableData from "./TableData";

const OrderSummary = () => {
  return (
    <div className="py-24 flex flex-col items-center gap-y-5 px-48">
      {/* <h2>Order Summary</h2> */}
      <OrderTable />
    </div>
  );
};

export default OrderSummary;

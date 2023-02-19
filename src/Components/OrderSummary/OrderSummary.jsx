import React from "react";
import OrderTable from "./OrderTable";

const OrderSummary = () => {
  return (
    <div className="py-24 flex flex-col items-center gap-y-5 px-48">
      <OrderTable />
    </div>
  );
};

export default OrderSummary;

import React from "react";
import { useLoaderData } from "react-router-dom";
import Credit from "./Credit";
import Debit from "./Debit";

const BalanceSheetPage = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-2">
      <Debit data={data} />
      <Credit data={data} />
    </div>
  );
};

export default BalanceSheetPage;

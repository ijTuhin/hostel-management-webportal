import React from "react";
import MealBillTable from "./MealBillTable";
import FinanceSearchBar from "../SearchBar/FinanceSearchBar";

const MealBillPage = () => {
  return (
    <div className="px-32 py-12">
      <FinanceSearchBar />
      <MealBillTable />
    </div>
  );
};

export default MealBillPage;

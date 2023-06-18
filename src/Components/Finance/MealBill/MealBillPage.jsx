import React from "react";
import MealBillTable from "./MealBillTable";
import FinanceSearchBar from "../SearchBar/FinanceSearchBar";

const MealBillPage = () => {
  return (
    <div>
      <FinanceSearchBar />
      <MealBillTable />
    </div>
  );
};

export default MealBillPage;

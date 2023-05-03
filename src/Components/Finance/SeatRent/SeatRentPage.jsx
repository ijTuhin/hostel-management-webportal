import React from "react";
import SeatRentTable from "./SeatRentTable";
import FinanceSearchBar from "../SearchBar/FinanceSearchBar";

const SeatRentPage = () => {
  return (
    <div className="px-32 py-12">
      <FinanceSearchBar />
      <SeatRentTable />
    </div>
  );
};

export default SeatRentPage;

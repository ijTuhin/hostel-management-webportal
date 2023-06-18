import React from "react";
import SeatRentTable from "./SeatRentTable";
import FinanceSearchBar from "../SearchBar/FinanceSearchBar";

const SeatRentPage = () => {
  return (
    <div>
      <FinanceSearchBar />
      <SeatRentTable />
    </div>
  );
};

export default SeatRentPage;

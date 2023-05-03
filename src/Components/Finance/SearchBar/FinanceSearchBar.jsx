import React from "react";
import { useScrollPosition } from "../../../Utilities/ScrollStyleHook/useScrollPosition";
import SearchBar from "./SearchBar";
import SortingDropdown from "./SortingDropdown";

const FinanceSearchBar = ({ total }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const styles = {
    zIndex: 1300,
  };
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "justify-end" : "justify-between",
        "flex items-end"
      )}
    >
      <div
        style={styles}
        className={classNames(
          scrollPosition > 0 ? "fixed top-3 right-96" : "",
          ""
        )}
      >
        <SearchBar />
      </div>
      <SortingDropdown />
    </div>
  );
};

export default FinanceSearchBar;

import React from "react";
import GroceryList from "./GroceryList";
import AddItemBtn from "./AddItemBtn";
import AddItem from "./AddItem";

const GroceriesPage = () => {
  return (
    <div className="px-32 py-16 space-y-2">
      <GroceryList />
      <AddItem />
    </div>
  );
};

export default GroceriesPage;

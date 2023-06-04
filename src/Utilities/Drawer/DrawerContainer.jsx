import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MealDrawer from "./MealDrawer";
import WardenDrawer from "./WardenDrawer";
import FinanceDrawer from "./FinanceDrawer";
import CreateUserDrawer from "./CreateUserDrawer";

const DrawerContainer = ({ item, title }) => {
  const [value, setValue] = useState({});
  return (
    <div className={`${title ? "pt-[4.35rem]" : ""} absolute w-full`}>
      {title && (
        <div className="px-10 py-5 bg-emerald-600 text-white text-xl">
          {title}
        </div>
      )}
      <div
        className={`grid h-screen ${title ? "grid-cols-6" : "grid-cols-4"} `}
      >
        <div className="h-full shadow-md text-gray-500">
          {item === 1 && <MealDrawer />}
          {item === 2 && <WardenDrawer />}
          {item === 3 && <FinanceDrawer />}
          {item === 4 && <CreateUserDrawer />}
        </div>
        <div className={`${title ? "col-span-5" : "col-span-3"} `}>
          <Outlet context={[value, setValue]} />
        </div>
      </div>
    </div>
  );
};

export default DrawerContainer;

import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MealDrawer from "./MealDrawer";
import WardenDrawer from "./WardenDrawer";
import FinanceDrawer from "./FinanceDrawer";
import CreateUserDrawer from "./CreateUserDrawer";

const DrawerContainer = ({ item, title }) => {
  const [value, setValue] = useState({});
  // Create new utility record on month change
  if (item === 2 || item === 3 ) {
    const data = useLoaderData();
    if (data.length === 0) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const m = new Date().getMonth();
      const previous =
        months[m - 1] + "-" + new Date().getFullYear();
      const [item, setitem] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:3001/utility?month=${previous}`)
          .then((res) => res.json())
          .then((item) => {
            setitem(item);
          });
      }, []);
      const value = item.map((i) => {
        let items = {
          due: i.status * i.bill,
          name: i.name,
        };
        return items;
      });
      fetch("http://localhost:3001/utility/new", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => response.json())
        .then((item) => {
          console.log(item.item);
        });
    }
  }
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

import React, { useState } from "react";
import Header from "../Components/Common/Header";
import HomeBox from "../Components/Common/HomeBox";
import PrimaryMenu from "../Components/Common/PrimaryMenu";
import OutletBox from "../Components/Common/OutletBox";
import { role } from "../Hooks/conditionData";
import { financeMenu, mealMenu, wardenMenu } from "../Hooks/staticData";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const [value, setValue] = useState('');
  let data = {
    header: "",
  };
  if (role === "warden") {
    data = {
      header: "Warden Panel",
      primary: wardenMenu,
    };
  } else if (role === "accountant") {
    data = {
      header: "Finance Director Panel",
      primary: financeMenu,
    };
  } else if (role === "meal") {
    data = {
      header: "Meal Manager Panel",
      primary: mealMenu,
    };
  }
  return (
    <main className="relative">
      <Header title={data.header} />
      <HomeBox />
      <PrimaryMenu set={setValue} menu={data.primary} />
      <OutletBox outletHeader={value}/>
    </main>
  );
}

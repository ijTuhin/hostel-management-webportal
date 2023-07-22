import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import HomeBox from "../Components/Common/HomeBox";
import PrimaryMenu from "../Components/Common/PrimaryMenu";
import OutletBox from "../Components/Common/OutletBox";
import { role } from "../Hooks/conditionData";
import { financeMenu, mealMenu, wardenMenu } from "../Hooks/staticData";
import { useAuthUser } from "../../Authentications/Authenticate/UserContext";
import Loader from "../Components/Common/Loader";

export default function HomePage() {
  const { loading, createGroceryRecord, createUtilityRecord } = useAuthUser();
  useEffect(() => {
    createGroceryRecord();
    createUtilityRecord();
  }, []);
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
  console.log(role);
  const [value, setValue] = useState(data?.primary[0]?.name);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="relative">
          <Header title={data?.header} />
          <HomeBox />
          <PrimaryMenu set={setValue} menu={data?.primary} />
          <OutletBox outletHeader={value} />
        </main>
      )}
    </>
  );
}

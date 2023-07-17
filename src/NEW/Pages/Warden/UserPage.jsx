import React from "react";
import SubOutletBox from "../../Components/Common/SubOutletBox";
import { wardenMenu } from "../../Hooks/staticData";

export default function UserPage() {
  return <SubOutletBox menu={wardenMenu[1].subMenu}/>;
}

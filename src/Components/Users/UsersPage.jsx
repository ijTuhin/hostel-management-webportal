import React from "react";
import { Outlet } from "react-router-dom";
import SecondaryNavbar from "../../Utilities/Navbar/SecondaryNavbar";
import { UsersNavMenuData } from "../../Utilities/NavData/NavData";

const UsersPage = () => {
  const item  = UsersNavMenuData
  const styles = {
    zIndex: 1301,
  };
  return (
    <div className="absolute top-[4.35rem] w-full">
      <div style={styles}>
        <SecondaryNavbar item={item} />
      </div>
      <Outlet />
    </div>
  );
};

export default UsersPage;

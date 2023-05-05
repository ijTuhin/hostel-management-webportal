import React from "react";
import { Outlet } from "react-router-dom";
import UsersMenu from "./UsersMenu";

const UsersPage = () => {
  const styles = {
    zIndex: 1301,
  };
  return (
    <div className="absolute top-[4.35rem] w-full">
      <div style={styles}>
        <UsersMenu />
      </div>
      <Outlet />
    </div>
  );
};

export default UsersPage;

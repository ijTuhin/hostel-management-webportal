import React from "react";
import { Outlet } from "react-router-dom";
import UsersMenu from "../Components/Users/UsersMenu";

const UserPage = () => {
  return (
    <div className="absolute top-[4.35rem] w-full">
      <UsersMenu />
      <Outlet />
    </div>
  );
};

export default UserPage;

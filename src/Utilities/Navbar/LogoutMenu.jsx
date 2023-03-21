import React from "react";

const LogoutMenu = () => {
  return (
    <div className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-8 text-green-600 decoration-2"
            : ""
        }
        to="/payment-history"
      >
        <RiLogoutCircleRLine />
      </NavLink>
    </div>
  );
};

export default LogoutMenu;

import React from 'react'
import { NavLink } from 'react-router-dom';
const NavMenu = () => {
    return (
        <ul className="flex items-center justify-center space-x-1 px-2">
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/">Home</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/users-detail">Users</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/meal">Meal</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/warden">Warden</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/finance-management">Finance</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
            <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/create-notice">Notices</NavLink>
          </li>
        </ul>
      );
}

export default NavMenu
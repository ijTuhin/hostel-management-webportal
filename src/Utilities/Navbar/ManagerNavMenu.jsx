import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ManagerNavMenu = () => {
  return (
    <ul className="flex space-x-1">
      <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/">Manager</NavLink>
      </li>
      <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/order-summary">Orders</NavLink>
      </li>
      <li className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-2 rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/order-summary">Items</NavLink>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Groceries
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Meal Cost
      </li>
    </ul>
  )
}

export default ManagerNavMenu
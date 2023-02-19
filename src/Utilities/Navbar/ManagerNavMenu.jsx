import React from 'react'
import { Link } from 'react-router-dom'

const ManagerNavMenu = () => {
  return (
    <ul className="flex space-x-1">
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/">Manager</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/order-summary">Orders</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/order-summary">Items</Link>
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
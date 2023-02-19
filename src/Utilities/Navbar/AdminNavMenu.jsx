import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavMenu = () => {
  return (
    <ul className="flex space-x-1">
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/">Admin</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/order-summary">Orders</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Groceries
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Users
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 hover:border-b-2 border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/payment-history">Feedbacks</Link>
      </li>
    </ul>
  )
}

export default AdminNavMenu
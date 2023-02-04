import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-black text-gray-300 font-medium fixed w-full">
      <div>wqrq</div>
      <ul className="flex space-x-5">
        <li className="hover:text-yellow-600">Home</li>
        <li className="hover:text-yellow-600">Order Summary</li>
        <li className="hover:text-yellow-600">Payment History</li>
        <li className="hover:text-yellow-600">My Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;

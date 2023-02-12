import React, { useContext } from 'react'
import { AuthContext } from '../../Authentications/Authenticate/UserContext';
import userDemo from "../../Images/user.avif";

const UserProfile = () => {
  const {user} = useContext(AuthContext)
  return (
    <section className="border-l-2 border-b-2 border-dashed border-green-400 shadow-sm py-10 px-20">
        <div>
            <img className="border-0 w-48 h-48" src={userDemo} alt="" />
        </div>
        <div className="font-medium py-10 text-blue-900">
            <p>Name: <span className="text-black font-normal px-3">{user?.displayName}</span></p>
            <p>User Status: <span className="text-black font-normal px-3">Non-residence(Student)</span></p>
            <p>Current meal: <span className="text-black font-normal px-3">Breakfast</span></p>
            <p className="pb-1.5">Status: <span className="font-semibold px-3 text-red-500">Pending</span></p>
            <p className="border-t border-gray-300 pt-1.5">Remaining Coupon: <span className="text-black font-normal px-3">14</span></p>
        </div>
    </section>
  )
}

export default UserProfile
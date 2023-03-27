import React from 'react'
import { NavLink } from 'react-router-dom'

const Overview = () => {
  return (
    <div className='w-full h-full py-14 px-40 space-y-4 bg-gray-50'>
            <div className='grid grid-cols-2 border-b border-slate-200 py-3.5'>
                <p className='text-xl font-serif text-teal-600'>Academic Information</p>
                <div className='flex flex-col gap-y-3'>
                    <p>Name: <span className='text-sm text-gray-600 px-2'>Sameera Tabassum Era</span></p>
                    <p>Gsuit: <span className='text-sm text-gray-600 px-2'>c210326@ugrad.iiuc.ac.bd</span></p>
                    <div className='flex gap-x-6'>
                        <p>Matric ID: <span className='text-sm text-gray-600 px-2'>C183275</span></p>
                        <p>Section: <span className='text-sm text-gray-600 px-2'>BF</span></p>
                    </div>
                    <p>Program: <span className='text-sm text-gray-600 px-2'>B.Sc in Computer Science & Engineering.</span></p>
                    <div className='flex gap-x-6'>
                        <p>Current session: <span className='text-sm text-gray-600 px-2'>Autumn'22</span></p>
                        <p>Last session: <span className='text-sm text-gray-600 px-2'>Spring'25</span></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 border-b border-slate-200 py-3.5'>
                <p className='text-xl font-serif text-teal-600'>Personal Information</p>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex flex-col gap-y-3'>
                        <p>Address: <span className='text-sm text-gray-600 px-2'>K.B Aman Ali road, Rahattarpul, Chawkbazar.</span></p>
                        <div className='flex gap-x-6'>
                            <p>Thana: <span className='text-sm text-gray-600 px-2'>Chawkbazar</span></p>
                            <p>District: <span className='text-sm text-gray-600 px-2'>Chattogram</span></p>
                        </div>
                        <p>Phone number: <span className='text-sm text-gray-600 px-2'>+8801398445357</span></p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end gap-x-2'>
                <button className='border-2 rounded-md px-6 py-1.5 bg-gray-300 hover:bg-gray-500 text-gray-50'>
                    <NavLink to="/users/create/academic">Cancel</NavLink>
                </button>
                <button className='border-2 rounded-md px-8 py-1.5 bg-teal-600 hover:bg-teal-700 text-white'>
                    <NavLink to="/users/create/account">Save</NavLink>
                </button>
            </div>
        </div>
  )
}

export default Overview
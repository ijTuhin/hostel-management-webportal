import React from 'react'

const PersonalData = () => {
    return (
        <div className='w-full h-full py-14 px-40 space-y-4 bg-gray-50'>
            <div className='flex justify-between items-center border-b border-slate-200 py-3.5'>
                <div>
                    <p className='text-xl font-semibold font-serif text-gray-600'>Personal Information</p>
                    <p className='text-sm text-gray-400'></p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <input className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
                    <input className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
                </div>
            </div>
            <div className='flex justify-between items-center border-b border-slate-200 py-3.5'>
                <div>
                    <p className='text-xl font-semibold font-serif text-gray-600'>Permanent Address</p>
                    <p className='text-sm text-gray-400'>(For emergency, community, forum, etc.)</p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <input className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
                    <input className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
                    <input className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
                </div>
            </div>
            <input hidden className='border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded' type="text" name="" id="" />
            <div className='w-full flex justify-end'>
                <button className='border-2 rounded-md px-6 py-1.5 bg-teal-600 hover:bg-teal-700 text-white'>Next</button>
            </div>
        </div>
      )
}

export default PersonalData
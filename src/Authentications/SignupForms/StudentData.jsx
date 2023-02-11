import React from 'react'
import { useFormContext } from 'react-hook-form';

const StudentData = () => {
  const { register } = useFormContext();
  return (
    <>
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Enter your matric ID' {...register("matricID", { required: true })} />
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Enter your batch' {...register("batch", { required: true })} />
        <select
            className="border-b border-green-600 py-1 text-gray-500 text-sm"
            {...register("department", { required: true })}
          >
            <option value="Choose Your Department">
              Choose Your Department
            </option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="EB">EB</option>
            <option value="ELL">ELL</option>
            <option value="BBA">BBA</option>
          </select>
    </>
  )
}

export default StudentData
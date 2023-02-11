import React from 'react'
import { useFormContext } from 'react-hook-form';

const CommonData = () => {
    const { register } = useFormContext();
  return (
    <>
        <input className='border-b border-green-600 outline-transparent px-2 py-1 col-span-2' type="text" name="" id="" placeholder='Enter your name' {...register("name", { required: true })} />
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Phone number' {...register("phone", { required: true })} />
    </>
  )
}

export default CommonData
import React from 'react'
import { useFormContext } from 'react-hook-form';

const GuestData = () => {
  const { register } = useFormContext();
  return (
    <>
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Enter your NID' {...register("nid", { required: true })} />
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Reference ID' {...register("referenceID", { required: true })} />
        <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Relation' {...register("relation", { required: true })}/>
    </>
  )
}

export default GuestData
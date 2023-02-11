import React, { useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { AiOutlineArrowRight } from "react-icons/ai";

const UserData = () => {
  const [guestMode, setGuestMode] = useState(false)
  const { register } = useForm();
  return (
    <div className='space-y-10'>
      <FormProvider>
        <p className='text-3xl text-green-600 font-mono'>Signup as { guestMode ? 'Guest' : 'Student'}</p>
        <form action="" className='w-96 grid grid-cols-2 gap-x-5 gap-y-3'>
            <input className='border-b border-green-600 outline-transparent px-2 py-1 col-span-2' type="text" name="" id="" placeholder='Enter your name' {...register("name", { required: true })} />
            <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Phone number' {...register("phone", { required: true })} />
            <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Enter your NID' {...register("nid", { required: true })} />
            <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Reference ID' {...register("referenceID", { required: true })} />
            <input className='border-b border-green-600 outline-transparent px-2 py-1' type="text" name="" id="" placeholder='Relation' {...register("relation", { required: true })}/>
            <div className='flex justify-center items-center gap-2 col-span-2 pt-2 text-gray-600'>
                <span>Choose your picture:</span>
                <input
                    className="text-xs"
                    type="file"
                    name=""
                    id=""
                            // onChange={(e) => setimage(e.target.files[0])}
                />
            </div>
            <div className='col-span-2 flex justify-between items-center'>
                <button type='button' onClick={() => setGuestMode(!guestMode)} className='flex items-center gap-x-1 p-1 text-sm text-green-600 hover:text-green-700'>{ guestMode ? 'Student' : 'Guest'}? <span className='hover:underline'>click here</span></button>
                <button className='flex items-center gap-x-1 p-1 font-medium text-green-600 hover:text-green-hover:font-semibold'><span className='-mt-0.5'>Continue</span><AiOutlineArrowRight/></button>
            </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default UserData
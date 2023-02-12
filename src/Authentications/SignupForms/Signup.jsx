import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Signup = ({setSignupData, setCreateAcc}) => {
  return (
    <div className='space-y-8'>
        <p className='title text-green-600 text-3xl font-mono'><span className='text-4xl'>C</span>reate <br />new account !!!</p>
        <form action="" className='grid grid-cols-1 space-y-3 w-[20rem]'>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="text" name="" id="" placeholder='Username' required/>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="email" name="" id="" placeholder='Enter your email' required/>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="password" name="" id="" placeholder='Create password' required/>
            <div className='flex justify-between items-center pt-2'>
                <button onClick={() => {
                  setSignupData(null)
                  setCreateAcc(false)
                }} className='flex items-center gap-x-2 text-green-600 hover:text-green-700'><AiOutlineArrowLeft/><span className='-mt-0.5'>Back</span></button>
                <button className='border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
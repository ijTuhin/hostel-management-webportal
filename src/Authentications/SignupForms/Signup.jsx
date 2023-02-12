import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.config';

const Signup = ({setSignupData, setCreateAcc}) => {
  const handleSignup = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Successfull ',user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div className='space-y-8'>
        <p className='title text-green-600 text-3xl font-mono'><span className='text-4xl'>C</span>reate <br />new account !!!</p>
        <form onSubmit={handleSignup} className='grid grid-cols-1 space-y-3 w-[20rem]'>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="text" name="displayName" id="username" placeholder='Username' required/>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="email" name="email" id="email" placeholder='Enter your email' required/>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="password" name="password" id="password" placeholder='Create password' required/>
            <div className='flex justify-between items-center pt-2'>
                <button type='button' onClick={() => {
                  setSignupData(null)
                  setCreateAcc(false)
                }} className='flex items-center gap-x-2 text-green-600 hover:text-green-700'><AiOutlineArrowLeft/><span className='-mt-0.5'>Back</span></button>
                <button type='submit' className='border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../firebase.config'

const Login = () => {
  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Successfully Logged in!')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  return (
    <div className='space-y-8'>
        <p className='title text-green-600 text-3xl font-mono'><span className='text-4xl'>W</span>elcome back !!!</p>
        <form onSubmit={handleLogin} className='grid grid-cols-1 w-[20rem]'>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5' type="email" name="email" id="email" placeholder='Enter your email' required/>
            <input className='border-b border-green-600 outline-transparent px-2 py-1.5 mt-3' type="password" name="password" id="password" placeholder='Enter your password' required/>
            <div className='flex justify-start pt-2'>
                <button type='button' onClick={() => {/*  */}} className='p-1 text-xs text-green-600 hover:underline'>Forgot password?</button>
            </div>
            <div className='flex justify-end'>
                <button type='submit' className='border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600'>Log in</button>
            </div>
        </form>
    </div>
  )
}

export default Login
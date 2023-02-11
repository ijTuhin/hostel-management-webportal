import React from 'react'
import bgLogo from '../../Images/signup-II.jpg';
import Signup from './Signup';
import UserData from './UserData';
const SignupPage = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[40%] h-screen flex items-center'>
            <img src={bgLogo} className='w-[75%]' alt="" />
        </div>
        {/* Form */}
        <UserData/>
        {/* <Signup/> */}
    </div>
  )
}

export default SignupPage
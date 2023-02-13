import React, { useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { AiOutlineArrowRight } from "react-icons/ai";
import CommonData from './CommonData';
import GuestData from './GuestData';
import StudentData from './StudentData';
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebase.config";

const UserData = ({setSignupData, setCreateAcc}) => {
  const [guestMode, setGuestMode] = useState(false)
  const [image, setimage] = useState();
  const methods = useForm();
  
  const onSubmit = async (data) => {
    const imageRef = ref(storage, `images/${image.name}${Date.now()}`);
    await uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(imageRef).then((url) => {
        data.userImg = url;
        setSignupData(data)
      });
    });

    setCreateAcc(true)
  }
  return (
    <div className='space-y-10'>
      <FormProvider {...methods}>
        <p className='text-3xl text-green-600 font-mono'>Signup as { guestMode ? 'Guest' : 'Student'}</p>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='w-96 grid grid-cols-2 gap-x-5 gap-y-3'>
            <CommonData/>
            {!guestMode ? <StudentData/> : <GuestData/> }
            <div className='flex justify-center items-center gap-2 col-span-2 pt-2 text-gray-600'>
                <span>Choose your picture:</span>
                <input
                    className="text-xs"
                    type="file"
                    name=""
                    id=""
                    onChange={(e) => setimage(e.target.files[0])}
                />
            </div>
            <div className='col-span-2 flex justify-between items-center'>
                <button type='button' onClick={() => setGuestMode(!guestMode)} className='flex items-center gap-x-1 p-1 text-sm text-green-600 hover:text-green-700'>{ guestMode ? 'Student' : 'Guest'}? <span className='hover:underline'>click here</span></button>
                <button type='submit' className='flex items-center gap-x-1 p-1 font-medium text-green-600 hover:text-green-hover:font-semibold'><span className='-mt-0.5'>Continue</span><AiOutlineArrowRight/></button>
            </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default UserData
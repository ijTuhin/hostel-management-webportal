import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaUserSlash } from "react-icons/fa";
import { storage } from "../../../firebase.config";
import GuestSignupForm from "../NonResidence/GuestSignupForm";
import StudentSignupForm from "../NonResidence/StudentSignupForm";

const SignupForm = () => {
  const [guest, setGuest] = useState(false);
  const [image, setimage] = useState();
  const methods = useForm();
  const onSubmit = async (data) => {
    const imageRef = ref(storage, `images/${image.name}${Date.now()}`);
    await uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(imageRef).then((url) => {
        data.userImg = url;
        console.log(data);
        fetch("http://localhost:5000/non-residence-student-registration", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          });
      });
    });

  };

  return (
    <div className="flex justify-center mt-[10%]">
      <div className="border-0 shadow-lg space-y-3 bg-white pb-16 pt-12 px-16">
        <div className="flex justify-start items-center gap-x-2 text-xl font-bold font-serif">
          <span>
            <FaUserSlash />
          </span>
          Non-Residence Registration {guest ? "(Guest)" : "(Student)"}
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            {guest ? <GuestSignupForm /> : <StudentSignupForm />}
            <div className="text-gray-600 pt-1.5 pl-1">
              <span>Choose your picture:</span>
              <input
                className="text-xs pl-1.5"
                type="file"
                name=""
                id=""
                onChange={(e) => setimage(e.target.files[0])}
              />
            </div>
            <div className="flex justify-end mt-2.5 gap-x-1 items-end">
              <input
                onChange={(e) => setGuest(!guest)}
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs">Guest?</p>
            </div>
            <button
              type="submit"
              className="border-0 w-full bg-slate-600 hover:bg-slate-800 text-gray-200 rounded mt-2.5 px-3 py-1.5"
            >
              Sign up
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignupForm;

import React, { useState } from "react";
import { TbMessages } from "react-icons/tb";

const FeedbackBtn = () => {
    const [feedbackForm, setFeedbackForm] = useState(false);
  return (
    <section>
      <button onClick={() => setFeedbackForm(!feedbackForm)} className="text-5xl text-blue-500 fixed bottom-10 right-10">
        <TbMessages />
        {/* <VscFeedback /> */}
      </button>
      {
        feedbackForm && 
        <form className="border bg-white rounded-md rounded-br-none absolute bottom-16 right-16 flex flex-col items-end gap-y-1 p-4" action="">
            <input type="text" name="" id="username" hidden />
            <input type="text" name="" id="userstatus" hidden />
            <input type="text" name="" id="useremail" hidden />
            <textarea name="" className="border p-2" id="feedback" cols="35" rows="12"></textarea>
            <button className="px-3 py-1 bg-blue-500 rounded-md text-gray-100">Send</button>
        </form>
      }
    </section>
  );
};

export default FeedbackBtn;

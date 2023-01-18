import React, { useState } from "react";
import DataBox from "./DataBox";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataBox, setDataBox] = useState([]);

  // Handle Submit Button
  const handleSubmit = (e) => {
    const data = {
      emailId: email,
      password: password,
    };

    setDataBox( prev => [...prev, data])
  };

  console.log(dataBox);
  return (
    <div className="space-y-10">
      <div className="flex flex-col w-fit mx-auto gap-3">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-700 px-3 py-1"
          type="text"
          placeholder="enter your email.."
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-700 px-3 py-1"
          type="password"
          placeholder="enter your password.."
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="border border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-500 w-fit px-3 py-1 rounded"
        >
          Submit
        </button>
      </div>

      <div className="mx-auto border-4 border-gray-600 w-fit p-5 rounded-lg">
        {dataBox.map((data, index) => (
          <DataBox data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

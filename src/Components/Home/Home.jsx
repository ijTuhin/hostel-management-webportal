import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Create new grocery daily record
    const date = new Date().toLocaleDateString();
    fetch(`http://localhost:3001/grocery?date=${date}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
      });
    console.log(date);
    // Create new Utility month record
    fetch(`http://localhost:3001/utility`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
      });
    console.log(date);
  }, []);

  return <></>;
};

export default Home;

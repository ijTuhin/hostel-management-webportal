import React from "react";
import { useLoaderData } from "react-router-dom";

const MyAllNoticePage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>MyAllNoticePage</div>;
};

export default MyAllNoticePage;

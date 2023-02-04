import React from "react";
import Navbar from "../Common/Navbar";
import MealTimeRoute from "./MealTimeRoute";

const Home = () => {
  return (
    <div className="relative">
      <Navbar/>
      <div className="flex items-center h-screen px-10">
        {/* Meal Time Route */}
        <MealTimeRoute/>
        {/* User Profile Overview */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;

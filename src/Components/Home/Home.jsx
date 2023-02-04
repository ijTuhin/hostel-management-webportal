import React from "react";
import Navbar from "../Common/Navbar";
import MealTimeRoute from "./MealTimeRoute";
import UserProfile from "./UserProfile";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-screen flex items-center">
        <div className="flex items-center justify-between w-screen px-24">
          {/* Meal Time Route */}
          <MealTimeRoute />
          {/* User Profile Overview */}
          <UserProfile/>
        </div>
      </div>
    </div>
  );
};

export default Home;

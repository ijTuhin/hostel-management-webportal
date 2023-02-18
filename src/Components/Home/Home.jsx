import React from "react";
import Navbar from "../Common/Header/Navbar";
import FeedbackBtn from "./FeedbackBtn";
import MealTimeRoute from "./MealTimeRoute";
import UserProfile from "./UserProfile";

const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="flex items-center justify-between w-screen px-24">
          {/* Meal Time Route */}
          <MealTimeRoute />
          {/* User Profile Overview */}
          <UserProfile />
        </div>
      </div>
      <FeedbackBtn />
    </>
  );
};

export default Home;

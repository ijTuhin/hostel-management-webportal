/* Changed Here */
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthUser } from "../Authentications/Authenticate/UserContext";
import Header from "../Components/Common/Header/Header";
import Loading from "../Components/Common/Loading";

const PageContainer = () => {
  const { loading, createGroceryRecord, createUtilityRecord } = useAuthUser();
  useEffect(() => {
    createGroceryRecord();
    createUtilityRecord();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <Header />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default PageContainer;

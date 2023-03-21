import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Authentications/Authenticate/UserContext";
import Footer from "../Components/Common/Footer/Footer";
import Header from "../Components/Common/Header/Header";
import Loading from "../Components/Common/Loading";

const PageContainer = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <Header />
          {/* Outlet will render the children page element according to the URL or null if it is */}
          <Outlet />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default PageContainer;

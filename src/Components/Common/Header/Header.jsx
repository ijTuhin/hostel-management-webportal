import React from "react";
import Navbar from "./Navbar";
import { useScrollPosition } from "./useScrollPosition";
import "../../../Styles/style.css";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  return (
    <section
      className={classNames(
        scrollPosition > 0 ? "shadow py-3 px-10" : "shadow-none py-6 px-10",
        "fixed z-10 w-full bg-white text-gray-600 font-semibold navMenuFont"
      )}
    >
      <Navbar />
    </section>
  );
};

export default Header;

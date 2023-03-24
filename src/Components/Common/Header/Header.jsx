import React from "react";
import "../../../Styles/style.css";
import Navbar from "../../../Utilities/Navbar/Navbar";
import { useScrollPosition } from "../../../Utilities/ScrollStyleHook/useScrollPosition";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const styles = {
    zIndex: 1300,
  };
  const scrollPosition = useScrollPosition();
  return (
    <section style={styles}
      className={classNames(
        scrollPosition > 0 ? "shadow py-3" : "shadow-none py-4",
        "fixed w-full bg-white text-gray-600 font-semibold navMenuFont"
      )}
    >
      <Navbar />
    </section>
  );
};

export default Header;

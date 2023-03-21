import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center h-fit bg-black px-64 py-5 text-gray-300 space-y-4">
      {/* <div>
        <p className="border-b w-40 pb-2 text-white">Important Links</p>
      </div> */}
      <div className="w-64 flex flex-wrap justify-center items-center">
        <div className="space-y-3 space-x-3 text-xs text-gray-300">
          <button className="hover:text-green-400">About us</button>
          <span className="border-r"></span>
          <button className="hover:text-green-400">Guideline</button>
          <span className="border-r"></span>
          <button className="hover:text-green-400">Notices</button>
          <button className="hover:text-green-400">Contact Us</button>
          <span className="border-r"></span>
          <button className="hover:text-green-400">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

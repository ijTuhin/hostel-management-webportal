import React from "react";

const Footer = () => {
  return (
    <div className="static bottom-0 h-fit bg-black px-64 py-10 text-white space-y-4">
      <div>
        <p className="border-b w-40 pb-2">Important Links</p>
      </div>
      <div className="flex justify-between">
        <div className="space-y-3">
          <ul className="text-sm space-y-1">
            <li className="hover:text-amber-500"><button>About us</button></li>
            <li className="hover:text-amber-500"><button>Guideline</button></li>
            <li className="hover:text-amber-500"><button>Notices</button></li>
            <li className="hover:text-amber-500"><button>Contact Us</button></li>
          </ul>
        </div>
        <div className="w-[45%] grid grid-cols-3 gap-y-3 ">
          <p>ADDRESS</p>
          <p className="text-sm col-span-2">
          International Islamic University Chittagong - Female Hostel, Bahaddarhut bus terminal, Dhaka-Chattogram highway road, Chittagong 4100, Bangladesh
          </p>
          <p>TELEPHONE</p>
          <p className="text-sm col-span-2">
            +88 xxxxxxxxxxx (10 lines auto-hunting)
          </p>
          <p>EMAIL</p>
          <p className="text-sm col-span-2">
            info@iiucfemalehall.com enroll@iiucfemalehall.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

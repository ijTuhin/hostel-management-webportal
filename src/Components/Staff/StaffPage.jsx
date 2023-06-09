import React from 'react'
import SecondaryNavbar from '../../Utilities/Navbar/SecondaryNavbar';
import { Outlet } from 'react-router-dom';
import { StaffNavMenuData } from '../../Utilities/NavData/NavData';

const StaffPage = () => {
    const item  = StaffNavMenuData
    const styles = {
      zIndex: 1301,
    };
    return (
      <div className="py-[4.35rem] w-full h-screen">
        <div style={styles}>
          <SecondaryNavbar item={item} />
        </div>
        <Outlet />
      </div>
    );
  };

export default StaffPage
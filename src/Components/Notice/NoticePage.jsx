import React from 'react'
import { NoticeNavMenuData } from '../../Utilities/NavData/NavData'
import { Outlet } from 'react-router-dom'
import SecondaryNavbar from '../../Utilities/Navbar/SecondaryNavbar'

const NoticePage = () => {
  const item  = NoticeNavMenuData
  const styles = {
    zIndex: 1301,
  };
  return (
    <div className="py-[4.35rem] h-screen">
    <div style={styles}>
      <SecondaryNavbar item={item} center={1}/>
    </div>
    <Outlet />
    </div>
  )
}

export default NoticePage
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Common/Navbar'

const PageContainer = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Outlet will render the children page element according to the URL or null if it is */}
      <Outlet/>
    </div>
  )
}

export default PageContainer
import React from 'react'
import MegaMenu from '../../components/Navbar/MegaMenu'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
         <MegaMenu />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout
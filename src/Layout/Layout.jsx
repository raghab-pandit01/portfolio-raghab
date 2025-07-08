import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../Pages/HomePage.jsx/HomePage'
import SkillsPage from '../Pages/SkillsPage/SkillsPage'

const Layout = () => {
  return (
    <>
        <Navbar />
        <HomePage />
        <SkillsPage />
    </>
  )
}

export default Layout
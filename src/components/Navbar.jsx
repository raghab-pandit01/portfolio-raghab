import React from 'react'
import { FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className='text-center w-full h-20 shadow-xl rounded-b flex px-9 items-center top-0 left-0 fixed bg-[#E7ECEF] z-40'>
        <div className='flex justify-start items-center w-[25%]'>
          <h1 className='text-2xl font-bold text-gray-800'>
            Raghab's
            Portfolio
          </h1>
        </div>
        <div className='flex items-center justify-center space-x-6 w-[50%]'>
                <a href="/" className='text-gray-800 hover:text-blue-500'>Home</a>
                <a href="/skills" className='text-gray-800 hover:text-blue-500'>Skills</a>
                <a href="/projects" className='text-gray-800 hover:text-blue-500'>Projects</a>
                <a href="/about" className='text-gray-800 hover:text-blue-500'>About</a>
                <a href="/contactme" className='text-gray-800 hover:text-blue-500'>Contact</a>
        </div>
        <div className='flex items-center justify-end space-x-3 w-[25%]'>
            <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className='cursor-pointer text-gray-800 hover:text-blue-500 text-2xl' />
            </a>
            <a href="https://github.com/raghab-pandit01" target="_blank">
                <FaGithub className='cursor-pointer text-gray-800 hover:text-blue-500 text-2xl' />
            </a>

        </div>
      </div>
    </>
  )
}

export default Navbar
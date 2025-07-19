import React, { useState } from 'react'
import { FaBars, FaGithub, FaInstagram } from "react-icons/fa";
import { HiBars3BottomRight } from 'react-icons/hi2';


const Navbar = () => {

  // const NavLinks=[
  //   { name: "Home", 
  //     path: "/" },
  //   { name: "Skills", 
  //     path: "#skills" }, 
  //   { name: "Projects", 
  //     path: "#projects" },
  //   { name: "About", 
  //     path: "/about" },
  //   { name: "Contact", 
  //     path: "/contactme" }
  // ]
  
  const [activeBar, setActiveBar] = useState(false);
  return (
    <>
      <div className='text-center w-full h-20 shadow-xs rounded-b flex px-9 md:justify-evenly justify-between items-center top-0 left-0 absolute bg-[#0f0f1a] z-40'>
        <div className='flex justify-start items-center w-[25%]'>
          <h1 className='text-2xl font-bold text-gray-200'>
            Raghab's Portfolio
          </h1>
        </div>
        {/* <div className='hidden items-center justify-center space-x-10 w-[50%] md:flex'>
          {NavLinks.map((link) => (
            <a key={link.name} 
            href={link.path} 
            className='text-gray-200 hover:text-blue-500 hover:underline hover:text'>
              {link.name}
            </a>
          ))}
        </div> */}
          <HiBars3BottomRight className='cursor-pointer text-gray-200 hover:text-blue-500 text-2xl md:hidden flex justify-end' onClick={() => setActiveBar(true)}/>
        <div className='hidden md:flex items-center justify-end space-x-3 w-[25%]'>
            <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className='cursor-pointer text-gray-200 hover:text-blue-500 text-2xl' />
            </a>
            <a href="https://github.com/raghab-pandit01" target="_blank">
                <FaGithub className='cursor-pointer text-gray-200 hover:text-blue-500 text-2xl' />
            </a>
        </div>
        {activeBar && (
          <div className='fixed top-0 left-0 w-full bg-[#0f0f1a] bg-opacity-50 z-30 flex flex-col items-center justify-center'>
            <div className='flex justify-end w-full p-4'>
              <div className='cursor-pointer text-gray-200 text-4xl px-5 font-bold hover:text-blue-500' onClick={() => setActiveBar(false)} >
                &times;
                </div>
            </div>
            {/* <div className='flex flex-col items-center justify-center h-full'>
              {NavLinks.map((link) => (
                <a key={link.name} href={link.path} className='text-gray-200 py-2' onClick={() => setActiveBar(false)}>
                  {link.name}
                </a>
              ))}
            </div> */}
          <div className='flex items-center justify-center space-x-2 py-5'>
            <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className='cursor-pointer text-gray-800 hover:text-blue-500 text-2xl' />
            </a>
            <a href="https://github.com/raghab-pandit01" target="_blank">
                <FaGithub className='cursor-pointer text-gray-800 hover:text-blue-500 text-2xl' />
            </a>
        </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
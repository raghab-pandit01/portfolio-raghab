import React from 'react'
import { FaReact } from 'react-icons/fa'

const Skill = ({Icon, Name}) => {
  return (
    <div className='cursor-default group border-2 animate-skills transition duration-150 ease-in-out h-40 w-50 rounded-lg flex flex-col items-center justify-center space-y-4 text-white text-center'>
        <span className='group-hover:shadow-xl shadow-(color:[#3b5d74]) text-5xl'>{Icon}</span>
        <p className='font-bold text-2xl text-gray-400'>{Name}</p>
    </div>
  )
}

export default Skill
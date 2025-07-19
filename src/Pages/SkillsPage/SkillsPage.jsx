import React from 'react'
import Skill from './SkillCard'
import { FaGitAlt, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'

const SkillsPage = () => {
  
  const Skills=[
    {icon: <FaReact />,
      name: 'React'
    },
    {icon: <RiTailwindCssFill />,
      name: 'Tailwind'
    },
    {
      icon: <SiNextdotjs />,
      name: 'NextJs'
    },
    {
      icon: <FaGitAlt />,
      name: 'Git'
    }
  ]
  return (
    <>
        <div id='skills' className=' bg-gradient-to-b to-[#0f0f1a] from-[#3b5d74] h-[calc(100vh-80px)] w-full grid grid-cols-1'>
            <div className='w-full flex flex-col justify-center items-center'>
              <h1 className='text-4xl font-bold underline text-white font-[cursive] decoration-green-500'>Skills</h1>
           <div className="mt-15 grid grid-cols-2 gap-5">
            {Skills.map((skill)=> 
            <Skill Icon={skill.icon} Name={skill.name} />)}
           </div>
            </div>
        </div>
    </>
  )
}

export default SkillsPage
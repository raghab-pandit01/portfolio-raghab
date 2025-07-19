import React from 'react'

const HomePage = () => {
  const description= '{ HTML-CSS, JavaScript, React19, TailwindCSS, NextJS, Git/Github}'
  return (
    <>
        <div className='mt-19 font-winky bg-gradient-to-b from-[#0f0f1a] to-[#3b5d74] h-[calc(100vh-80px)] flex flex-col justify-center items-center relative'>
          <div className="">
            {/* <div className="p-[3px] bg-gradient-to-tr from-[#0f0f1a] to-[#3b5d74] rounded-full w-22 h-22 absolute mt-[-9rem] animate-jump z-5">&nbsp;</div> */}
                    <div className="space-y-2 flex flex-col items-center z-50">
            <h1 className='text-6xl font-bold text-white font-[Winky Rough] text-center'>Frontend Developer</h1>
            <div className='flex justify-center group'>
              <span className='text-center text-gray-400 hover:bg-gray-50/20 transition duration-200 ease-in-out cursor-pointer flex'>{description}</span>
              {/* <button className='group-hover:visible invisible cursor-pointer text-[10px] text-gray-400 px-4 hover:underline flex'>View More...</button> */}
            </div>
            <span className='text-center text-gray-400'>I am Raghab Pandit, I have a strong understanding of React 19, JavaScript, and modern UI development.</span>
          </div>
          </div>

        </div>
    </>
  )
}

export default HomePage
import React from 'react'

const HomePage = () => {
  return (
    <>
        {/* <div className='mt-20 bg-gradient-to-b from-[#274c77] to-[#6096ba] h-[calc(100vh-80px)] flex flex-col justify-center items-center'> */}
        <div className='mt-20 bg-[#E7ECEF] h-[calc(100vh-80px)] flex flex-col justify-center items-center space-y-4'>
            <div className='text-[#274c77] font-bold text-6xl flex flex-col justify-center items-center'>
              Hey, I'm
              <br/>
              <span className='text-gray-800'>Raghab Pandit</span>
              </div>
            <p className='text-gray-600 font-light text-[15px] text-right'>I'm a Frontend Developer with a strong understanding of React 19, JavaScript, and modern UI development</p>
        </div>
    </>
  )
}

export default HomePage
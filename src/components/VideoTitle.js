import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute w-screen aspect-video text-white  pt-[15%] px-6 md:px-12  bg-gradient-to-r from-black'>
      <h1 className='text-2xl font-bold md:text-6xl'>{title}</h1>
      <p className='hidden md:inline-block py-6 w-1/3'>{overview}</p>

      <div className='mt-3 md:mt-0'>
        <button className=' bg-gray-600 text-white  rounded-md px-4 py-1 md:py-2 md:px-8 hover:opacity-70'>Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white bg-opacity-50 rounded-md mx-2 p-2 px-12'>More Info</button>
      </div>
    </div>
  )
}


export default VideoTitle;

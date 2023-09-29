import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute w-screen aspect-video text-white  pt-[15%] px-12  bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 w-1/3'>{overview}</p>

      <div>
        <button className='bg-white text-black  rounded-md p-2 px-8 hover:opacity-70'>Play</button>
        <button className='bg-gray-500 text-white bg-opacity-50 rounded-md mx-2 p-2 px-12'>More Info</button>
      </div>
    </div>
  )
}


export default VideoTitle;

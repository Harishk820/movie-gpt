import React from 'react'
import GptMovieSuggetions from './GptMovieSuggetions';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

const GPTSearchPage = () => {
  return (

    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} alt='back_ground' />
      </div>
      <div className=' '>
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </>

  )
}

export default GPTSearchPage;

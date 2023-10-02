import React from 'react'
import GptMovieSuggetions from './GptMovieSuggetions';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

const GPTSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img className='tranpa'
          src={BG_URL}
          alt='back_ground' />
      </div>
      <GptMovieSuggetions />
      <GptSearchBar />
    </div>
  )
}

export default GPTSearchPage;

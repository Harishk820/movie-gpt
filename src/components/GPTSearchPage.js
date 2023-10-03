import React from 'react'
import GptMovieSuggetions from './GptMovieSuggetions';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

const GPTSearchPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='tranpa'
          src={BG_URL}
          alt='back_ground' />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />

    </div>
  )
}

export default GPTSearchPage;

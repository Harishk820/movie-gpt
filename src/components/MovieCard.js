import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className='w-28 h-42 md:w-48 md:h-72'>
      <img className="h-full md:h-72" src={IMG_CDN_URL + posterPath} alt='movie_card' />
    </div>
  )
}

export default MovieCard;

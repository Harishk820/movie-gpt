import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log(title);
  // console.log(movies);
  // console.log(movies[0].poster_path);


  return (
    <div className='px-10'>
      <h1 className='text-lg text-center md:text-start md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll justify-center '>
        <div className='flex gap-4   '>
          {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;

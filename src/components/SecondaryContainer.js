import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  // console.log(movies.nowPlayingMovies);

  return (
    movies.nowPlayingMovies && movies.popularMovies && (
      <div className=' bg-black '>
        <div className='mt-0 md:-mt-56 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;


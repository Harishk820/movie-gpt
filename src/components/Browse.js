import React, { } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  console.log(showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();


  return (
    <div>
      <Header />
      {showGptSearch ? < GPTSearchPage /> : <><MainContainer /> <SecondaryContainer /></>}
    </div>
  )
}

export default Browse;

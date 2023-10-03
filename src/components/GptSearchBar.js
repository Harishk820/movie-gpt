import React from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/GPTslice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    // console.log(movie);
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    return json.results;
  }
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API call to GPT API to get movies results
    const gptQuery = 'Act as a movie Recommendation system and suggest some movies for the query : ' +
      searchText.current.value +
      '. only give me names of five movies, comma saperated like the example result given ahead. Example Result: Gadar, Pink, Don, Chichore, 3idiots';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {//have to write error logic here
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    // Hera Pheri, Golmaal: Fun Unlimited, Andaz Apna Apna, Dil Chahta Hai, Welcome

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // "Ex- [Hera Pheri, Golmaal: Fun Unlimited, Andaz Apna Apna, Dil Chahta Hai, Welcome]"

    console.log(gptMovies);

    // for each movie I Will call TMDB search API to find result in TMDB databese

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    //[Promise,Promise,Promise,Promise,Promise]--> 5 times searchMovieTMDB returns promise
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

  }

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black rounded-sm grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className='p-4  m-4 col-span-9'
          type='text '
          placeholder={lang[langKey].gptSerachPlaceholder} >
        </input>
        <button className='py-4 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md'
          onClick={handleGptSearchClick}>
          {lang[langKey].search}

        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;

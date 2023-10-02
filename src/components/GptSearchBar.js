import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black rounded-sm grid grid-cols-12'>
        <input className='p-4  m-4 col-span-9' type='text '
          placeholder={lang[langKey].gptSerachPlaceholder} >
        </input>
        <button className='py-4 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;

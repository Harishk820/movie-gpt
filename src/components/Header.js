import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSerchView } from '../utils/GPTslice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleGptSearchClick = () => {
    // toggle GPT search

    dispatch(toggleGptSerchView());

  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // this will be called when components unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='flex flex-col items-center absolute w-screen z-10 bg-gradient-to-b from-black md:justify-between md:flex-row'>

      <img className='w-48 md:w-52 md:m-1 px-8 py-2 mx-auto md:mx-0' src="/Logo.png" alt='logo' />

      {user &&
        <div className='flex   -mt-4 md:mt-0 md:p-2 '>

          {showGptSearch &&
            (
              <select className='p-2 m-2 mt-4 mx-4 text-white bg-gray-700 rounded-lg'
                onClick={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifiers} value={lang.identifiers}>{lang.name}</option>)}
              </select>
            )
          }

          <button className='p-2 m-2 mt-4 mx-4 text-white bg-gray-600 rounded-lg'
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <img className='hidden md:inline-block w-12 h-12 mt-3' src={user.photoURL} alt='userphoto' />

          <button className='px-4 py-1 m-2 mt-4 md:py-2 md:mx-4 text-white rounded-md bg-gray-600'
            onClick={handleSignout}>Signout
          </button>
        </div>
      }

    </div>


  )
}

export default Header

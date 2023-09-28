import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {

  const user = useSelector(store => store.user);

  const navigate = useNavigate();

  const handleSignout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/Error");
    });
  }


  return (

    <div className='flex justify-between absolute w-screen z-10 bg-gradient-to-b from-black'>
      <img className='w-44 px-8 py-2'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />
      {user &&
        <div className='flex p-2'>
          <img className='w-12 h-12' src={user.photoURL} alt='userphoto' />
          <button onClick={handleSignout}>(signout)</button>
        </div>
      }

    </div>


  )
}

export default Header

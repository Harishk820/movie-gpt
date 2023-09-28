import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';



const Header = () => {

  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


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
  }, [])




  return (

    <div className='flex justify-between absolute w-screen z-10 bg-gradient-to-b from-black'>
      <img className='w-44 px-8 py-2' src={LOGO} alt='logo' />
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

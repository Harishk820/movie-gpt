import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMesssage, seterrorMesssage] = useState(null);


  const email = useRef(null);
  const pass = useRef(null);
  const fName = useRef(null);

  function handleButtonClick() {
    // checks email and pasword validation

    console.log(email.current.value);
    console.log(pass.current.value);

    const message = checkValidateData(email.current.value, pass.current.value);
    seterrorMesssage(message);

    // console.log(message);

    if (message) {
      return;
    }

    if (!isSignInForm) {
      // logic for signUp

      createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);

          // update profile

          updateProfile(user, {
            displayName: fName.current.value, photoURL: "https://avatars.githubusercontent.com/u/22270538?v=4"
          }).then(() => {
            // Profile updated!

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            navigate("/Browse");
          }).catch((error) => {
            // An error occurred
            seterrorMesssage(error.message);
          });


          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMesssage(errorCode + "-" + errorMessage);
        });

    } else {
      //sign In

      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMesssage(errorCode + "-" + errorMessage);
        });


    }
  }


  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className='absolute opacity-100'>
        <img className='tranpa' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='back_ground' />
      </div>


      <form onSubmit={(e) => e.preventDefault()}
        className='absolute my-32 mx-auto right-0 left-0 p-12 w-4/12 rounded-md bg-opacity-80 text-white bg-black'>

        <h3
          className='font-semibold text-3xl my-6 p-2 '>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h3>

        {!isSignInForm &&
          <input
            ref={fName}
            className='p-3 my-2 w-full rounded-md bg-slate-900' type='text' placeholder='Full Name' >
          </input>}

        <input
          ref={email}
          className='p-3 my-2 w-full rounded-md bg-slate-900'
          type='text'
          placeholder='Email or phone number'>
        </input>

        <input
          ref={pass}
          className='p-3 my-2 w-full rounded-md  bg-slate-900'
          type='password'
          placeholder='Password'>
        </input>


        <p className='text-red-700 font-semibold'>
          {errorMesssage}
        </p>

        <button
          onClick={handleButtonClick}
          className='p-3 my-3 w-full font-medium text-lg mt-8 bg-red-700 rounded-md'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className='my-8 cursor-pointer'
          onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign In Now"}
        </p>

      </form>


    </div>
  )
}

export default Login;
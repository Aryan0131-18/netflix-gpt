import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message);
        if (message) return;

        // SignIn Sign Up Logic
        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        //  photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } =auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        // An error occurred
                        seterrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                });
        }

    }

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className="w-full h-screen object-cover md:h-full"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="logo"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1
                    className="font-bold text-2xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&
                    (<input
                        ref={name} type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700" />)}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login

import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { app } from "firebaseConfig";
import Button from "components/Button/Button";
import { signUp } from "slices/authSlice";

function SignUp() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useSelector((state) => console.log(state.authState));

  function signUpHandler() {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoading(false);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        dispatch(
          signUp({
            accessToken: user?.accessToken,
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            uid: user?.uid,
            googleAccessToken: credential?.accessToken,
          })
        );
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  }

  return (
    <>
      <Toaster position="top-right" />
      <Button inverted color="red" loading={isLoading} onClick={signUpHandler}>
        Sign Up
      </Button>
    </>
  );
}

export default SignUp;

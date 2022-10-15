import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { app } from "firebaseConfig";
import Button from "components/Button/Button";

function SignUp() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);

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
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <Button inverted color="red" loading={isLoading} onClick={signUpHandler}>
      Sign Up
    </Button>
  );
}

export default SignUp;

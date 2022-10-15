import React from "react";
import { Icon } from "semantic-ui-react";

import { Main } from "./SignUp.style";
import SignUpContainer from "containers/SignUp/SignUp";

function SignUp() {
  return (
    <Main>
      <Icon name="youtube" color="red" size="massive" />
      <h1>Sign Up using Google Auth</h1>
      <SignUpContainer />
    </Main>
  );
}

export default SignUp;

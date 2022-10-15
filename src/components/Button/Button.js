import React from "react";

import { StyledButton } from "./Button.style";

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;

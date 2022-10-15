import React from "react";

import { InputContainer, StyledInput } from "./Input.style";

function Input() {
  return (
    <InputContainer>
      <StyledInput fluid action={{ icon: "search" }} placeholder="Search..." />
    </InputContainer>
  );
}

export default Input;

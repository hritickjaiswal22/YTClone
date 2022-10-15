import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { Container, LogoContainer } from "./Header.style";
import Input from "containers/Input/Input";
import Button from "components/Button/Button";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <LogoContainer>
          <Icon name="youtube" color="red" size="big" />
          <h1>YouTube</h1>
        </LogoContainer>
        <Input />
        <Button inverted color="blue" onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
      </Container>
      <Divider fitted />
    </>
  );
}

export default Header;

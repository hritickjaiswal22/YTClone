import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const Nav = styled.nav`
  & #scrollFeed::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  & button {
    border-radius: 1rem !important;
  }

  & button[data-active="active"] {
    background-color: black !important;
    color: #fff !important;
  }
`;

export const StyledSecondaryMenu = styled(Menu)`
  padding: 0.5rem;
  overflow-x: scroll;
  margin: 0 !important;
`;

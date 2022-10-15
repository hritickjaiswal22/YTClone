import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const SidebarContainer = styled.aside`
  min-width: 18.75rem;
  height: calc(100vh - 54px);

  & > .ui {
    border: none;
    box-shadow: none !important;
  }
`;

export const StyledMenu = styled(Menu)({});

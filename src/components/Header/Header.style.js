import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3125rem;

  & > h1 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

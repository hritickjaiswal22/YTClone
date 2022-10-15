import styled from "styled-components";

export const Grid = styled.article`
  display: grid;
  justify-content: center;
  align-items: end;
  grid-template-columns: repeat(auto-fit, minmax(290px, 320px));
  gap: 1rem;
  height: calc(100vh - 116px);
  overflow-y: scroll;
  padding: 1rem;
  background-color: #f9f9f9;

  &::-webkit-scrollbar-thumb {
    background: #030303;
  }
`;

export const DummyBox = styled.div`
  width: 100%;
  height: 600px;
  background-color: orangered;
`;

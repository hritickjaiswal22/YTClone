import styled from "styled-components";

export const MainContainer = styled.article`
  height: calc(100vh - 55px);
  background-color: #f9f9f9;
  padding: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 75%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const RightContainer = styled.div`
  width: 25%;
  height: 100%;
`;

export const VideoContainer = styled.div`
  height: 80%;
`;

export const HeaderContainer = styled.div`
  margin: 1.5rem 0;
`;

export const JustifiedFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LightSpan = styled.span`
  color: #7c7c7c !important;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ChannelInfo = styled.div`
  margin-left: 1rem;

  & > h5 {
    margin: 0.3rem 0 !important;
  }
`;

export const Details = styled.div`
  margin: 1rem 0;
  white-space: pre-wrap;

  & i.dropdown.icon {
    display: none !important;
  }

  & .title {
    color: #7c7c7c !important;
  }
`;

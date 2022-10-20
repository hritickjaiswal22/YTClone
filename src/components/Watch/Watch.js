import React from "react";
import { useParams } from "react-router-dom";
import {
  Placeholder,
  Icon,
  Divider,
  Accordion,
  Image,
} from "semantic-ui-react";

import Button from "components/Button/Button";

import {
  MainContainer,
  FlexContainer,
  LeftContainer,
  RightContainer,
  VideoContainer,
  HeaderContainer,
  JustifiedFlexContainer,
  LightSpan,
  IconContainer,
  ChannelInfo,
  Details,
} from "./Watch.style";

function Watch({
  title,
  views,
  likes,
  channelTitle,
  description,
  subscribers,
  channelThumbnail,
}) {
  const { id } = useParams();

  const panels = [
    {
      key: "description",
      title: {
        content: "SHOW MORE",
      },
      content: {
        content: <p>{`${description}`}</p>,
      },
    },
  ];

  return (
    <MainContainer>
      <FlexContainer>
        <LeftContainer>
          <VideoContainer>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}?controls=0`}
            ></iframe>
          </VideoContainer>

          <HeaderContainer>
            {title ? (
              <h3>{title}</h3>
            ) : (
              <Placeholder fluid>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            )}
          </HeaderContainer>

          {views ? (
            <JustifiedFlexContainer>
              <LightSpan>{views} views</LightSpan>
              <IconContainer>
                <Icon name="thumbs up outline" size="large" />
                {likes}
              </IconContainer>
            </JustifiedFlexContainer>
          ) : (
            ""
          )}

          <Divider />

          {channelTitle && subscribers ? (
            <JustifiedFlexContainer>
              <JustifiedFlexContainer>
                <Image src={channelThumbnail} avatar />
                <ChannelInfo>
                  <h5>{channelTitle}</h5>
                  <LightSpan>{subscribers}</LightSpan>
                </ChannelInfo>
              </JustifiedFlexContainer>
              <Button color="red">SUBSCRIBE</Button>
            </JustifiedFlexContainer>
          ) : (
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          )}

          {description ? (
            <Details>
              <Accordion panels={panels} />
            </Details>
          ) : (
            ""
          )}
        </LeftContainer>
        <RightContainer />
      </FlexContainer>
    </MainContainer>
  );
}

export default Watch;

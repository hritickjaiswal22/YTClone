import React from "react";
import { Image } from "semantic-ui-react";

import { StyledCard as Card } from "./VideoItem.style";

function VideoItem({
  channelId,
  channelTitle = "",
  description,
  duration,
  id,
  thumbnail = "",
  title = "",
  views = "",
}) {
  if (channelTitle || thumbnail || title || views)
    return (
      <Card>
        <Image src={thumbnail} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{`${title.substring(0, 30)}...`}</Card.Header>
          <Card.Meta>{channelTitle}</Card.Meta>
          <Card.Meta>{`${Math.floor(views / 1000)}k views`}</Card.Meta>
        </Card.Content>
      </Card>
    );
}

export default VideoItem;

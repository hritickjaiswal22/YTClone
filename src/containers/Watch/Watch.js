import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { getChannelDetails, getVideoById } from "utilities/fetchData";
import WatchComponent from "components/Watch/Watch";

function Watch() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getVideoById(id);
        setVideoDetails(data?.data?.items[0]);

        const channelId = data?.data?.items[0]?.snippet?.channelId;

        const channelDetails = await getChannelDetails(channelId);

        setChannelDetails(channelDetails?.data?.items[0]);
      } catch (error) {
        toast.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <WatchComponent
        title={videoDetails?.snippet?.title}
        channelTitle={videoDetails?.snippet?.channelTitle}
        views={videoDetails?.statistics?.viewCount}
        likes={videoDetails?.statistics?.likeCount}
        videoDetails={videoDetails}
        description={videoDetails?.snippet?.description}
        subscribers={channelDetails?.statistics?.subscriberCount}
        channelThumbnail={channelDetails?.snippet?.thumbnails?.default?.url}
      />
    </>
  );
}

export default Watch;

import React, { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, DummyBox } from "./HomeList.style";
import VideoItem from "components/VideoItem/VideoItem";

function HomeList({ videos, getNewVideos }) {
  const endRef = useRef();
  const navigate = useNavigate();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      getNewVideos();
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (endRef.current) observer.observe(endRef.current);
  }, [handleObserver]);

  function selectHandler(e) {
    const videoId =
      e.target.parentElement.parentElement.getAttribute("data-videoid");

    if (videoId) navigate(`/watch/${videoId}`);
  }

  return (
    <>
      <Grid onClick={selectHandler}>
        {videos.map((video) => (
          <VideoItem
            key={typeof video.id === "string" ? video.id : video?.id?.videoId}
            {...video}
          />
        ))}
        <div id="end" ref={endRef}>
          Loading
        </div>
      </Grid>
    </>
  );
}

export default HomeList;

import React, { useEffect, useRef, useCallback } from "react";

import { Grid, DummyBox } from "./HomeList.style";
import VideoItem from "components/VideoItem/VideoItem";

function HomeList({ videos, getNewVideos }) {
  const endRef = useRef();

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

  return (
    <>
      <Grid>
        {videos.map((video) => (
          <VideoItem
            key={typeof video.id === "string" ? video.id : video?.id?.videoId}
            {...video}
          />
        ))}
        {/* <DummyBox />
        <DummyBox />
        <DummyBox />
        <DummyBox />
        <DummyBox />
        <DummyBox /> */}
        <div id="end" ref={endRef}></div>
      </Grid>
    </>
  );
}

export default HomeList;

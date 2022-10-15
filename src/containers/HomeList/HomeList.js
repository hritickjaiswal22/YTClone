import React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomeListComponent from "components/HomeList/HomeList";
import { getVideos } from "slices/videoSlice";

function HomeList() {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videosState);

  function getNewVideos() {
    dispatch(getVideos());
  }

  return (
    <HomeListComponent
      videos={Array.isArray(videos) ? videos : []}
      getNewVideos={getNewVideos}
    />
  );
}

export default HomeList;

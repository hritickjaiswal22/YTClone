import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import HomeListComponent from "components/HomeList/HomeList";
import { getVideos } from "slices/videoSlice";

function HomeList() {
  const dispatch = useDispatch();
  const { videos, error } = useSelector((state) => state.videosState);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  function getNewVideos() {
    dispatch(getVideos());
  }

  return (
    <>
      <Toaster />
      <HomeListComponent
        videos={Array.isArray(videos) ? videos : []}
        getNewVideos={getNewVideos}
      />
    </>
  );
}

export default HomeList;

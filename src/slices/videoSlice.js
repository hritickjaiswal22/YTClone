import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularVidoes, getVideosByCategory } from "utilities/fetchData";

const initialState = {
  videos: [],
  loading: false,
  selectedCategory: "popular",
  nextPageToken: null,
};

function processData(obj) {
  return obj?.data?.items.map((video) => {
    const temp = {};

    temp.id = typeof video.id === "object" ? video.id?.videoId : video.id;
    temp.channelId = video?.snippet?.channelId;
    temp.channelTitle = video?.snippet?.channelTitle;
    temp.description = video?.snippet?.description;
    temp.title = video?.snippet?.title;
    temp.thumbnail = video?.snippet?.thumbnails?.medium?.url;

    return temp;
  });
}

export const getVideos = createAsyncThunk(
  "videos/getVideos",
  async (userId, thunkAPI) => {
    let fetchedData;
    if (thunkAPI.getState().videosState?.selectedCategory === "popular")
      fetchedData = await getPopularVidoes(
        thunkAPI.getState().videosState?.nextPageToken
      );
    else
      fetchedData = await getVideosByCategory(
        thunkAPI.getState().videosState?.selectedCategory,
        thunkAPI.getState().videosState?.nextPageToken
      );
    let videos = processData(fetchedData);
    videos = [...thunkAPI.getState().videosState?.videos, ...videos];

    const { nextPageToken } = fetchedData?.data;

    return {
      nextPageToken,
      videos,
    };
  }
);

export const counterSlice = createSlice({
  name: "videosState",
  initialState,
  reducers: {
    resetVideos: (state) => {
      state.videos = [];
    },
    updateCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getVideos.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.nextPageToken = action.payload.nextPageToken;
      state.videos = action.payload.videos;
    });
  },
});

// Action creators are generated for each case reducer function
export const { resetVideos, updateCategory } = counterSlice.actions;

export default counterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import videoReducer from "slices/videoSlice";
import authReducer from "slices/authSlice";

export const store = configureStore({
  reducer: {
    videosState: videoReducer,
    authState: authReducer,
  },
});

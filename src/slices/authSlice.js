import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  displayName: "",
  email: "",
  photoURL: "",
  uid: "",
  googleAccessToken: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const {
        accessToken,
        displayName,
        email,
        photoURL,
        uid,
        googleAccessToken,
      } = action.payload;

      state.accessToken = accessToken;
      state.displayName = displayName;
      state.email = email;
      state.photoURL = photoURL;
      state.uid = uid;
      state.googleAccessToken = googleAccessToken;
    },
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;

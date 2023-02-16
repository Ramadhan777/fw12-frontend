import { createSlice } from "@reduxjs/toolkit";
import { getProfilePicture, uploadProfilePicture } from "../actions/profile";

const initialState = {
  picture: null,
};

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfilePicture.fulfilled, (state, { payload }) => {
      state.picture = payload.picture;
    });
    build.addCase(uploadProfilePicture.fulfilled, (state, { payload }) => {
      console.log(payload.picture)
      state.picture = payload.picture
    });
  },
});

export default profileReducer.reducer;

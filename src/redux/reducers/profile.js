import { createSlice } from "@reduxjs/toolkit";
import { getProfilePicture } from "../actions/profile";

const initialState = {
  picture: null,
};

const profileReducer = createSlice({
  name: "proile",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfilePicture.fulfilled, (state, {payload}) => {
        state.picture = payload.picture
    })
  }
});

export default profileReducer.reducer;

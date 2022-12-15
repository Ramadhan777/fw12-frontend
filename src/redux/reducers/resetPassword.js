import { createSlice } from "@reduxjs/toolkit";

import { forgotPasswordAction } from "../actions/resetPassword";

const initialState = {
  email: null,
  code: null,
};

const resetPasswordReducer = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    resetEmailAndCode: (state, action) => {
      return initialState
    }
  },
  extraReducers: (build) => {
    build.addCase(forgotPasswordAction.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.code = action.payload.code;
    });
  },
});

export const {resetEmailAndCode} = resetPasswordReducer.actions

export default resetPasswordReducer.reducer;

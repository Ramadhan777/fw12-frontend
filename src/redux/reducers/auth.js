import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../actions/auth";

const initialState = {
  token: null,
  role: null,
  error: null,
  isLoading: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
   refreshError: (state, action) => {
    state.error= null
   }
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, {payload}) => {
      state.token = payload.token
      state.role = payload.role
      state.isLoading = false
      if(payload === 'Wrong Email or Password'){
        state.error = payload
      } else {
        state.error = null
      }
    })
    build.addCase(registerAction.fulfilled, (state, {payload}) => {
      state.token = payload.token
      state.role = payload.role
      state.isLoading = false
      if(payload === 'Email already used'){
        state.error = payload
      } else if (payload === 'Phone number already used'){
        state.error = payload
      } else {
        state.error = null
      }
    })
    build.addCase(loginAction.pending, (state, {payload}) => {
      state.isLoading = true
    })
    build.addCase(registerAction.pending, (state, {payload}) => {
      state.isLoading = true
    })
    build.addCase(loginAction.rejected, (state, {payload}) => {
      state.error = 'Something happened in our backend'
      state.isLoading = false
    })
    build.addCase(registerAction.rejected, (state, {payload}) => {
      state.isLoading = false
    })
  }
});

export const { logout, refreshError } = authReducer.actions;

export default authReducer.reducer;

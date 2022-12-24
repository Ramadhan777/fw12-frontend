import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk("auth/loginAsync", async ({ email, password, cb }) => {
  try{const { data } = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, { email, password });
  cb();
  return data.results.token;}
  catch(err){
    return err.response.data.message
  }
});

export const registerUserAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, phoneNumber, email, password, cb }) => {
  const { data } = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/register`, { firstName, lastName, phoneNumber, email, password });
  cb()
  return data.results.token
});

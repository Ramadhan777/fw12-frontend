import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk("auth/loginAsync", async ({ email, password, cb }) => {
  try{const { data } = await axios.post(`https://fw12-backend-eta.vercel.app/auth/login`, { email, password });
  cb();
  return data.results.token;}
  catch(err){
    return err.response.data.message
  }
});

export const registerUserAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, phoneNumber, email, password, cb }) => {
  const { data } = await axios.post(`https://fw12-backend-eta.vercel.app/auth/register`, { firstName, lastName, phoneNumber, email, password });
  cb()
  return data.results.token
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const forgotPasswordAction = createAsyncThunk("auth/forgotPassword", async ({ email, cb }) => {
  try {
    const { data } = await axios.post(`https://fw12-backend-eta.vercel.app/auth/forgotPassword`, {
      email,
    });
    cb();
    return data.results;
  } catch (err) {
    return err.response.data.message;
  }
});

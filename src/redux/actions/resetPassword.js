import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const forgotPasswordAction = createAsyncThunk("auth/forgotPassword", async ({ email, cb }) => {
  try {
    const { data } = await http().post(`/auth/forgotPassword`, { email });
    cb();
    return data.results;
  } catch (err) {
    return err.response.data.message;
  }
});

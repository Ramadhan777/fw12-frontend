import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const forgotPasswordAction = createAsyncThunk("auth/forgotPassword", async ({ email, cb }) => {
  try {
    await http().post(`/auth/forgotPassword`, { email });
    cb();

    const result = {
      email
    }
   
    return result;
  } catch (err) {
    return err.response.data.message;
  }
});

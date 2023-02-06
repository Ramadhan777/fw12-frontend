import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk("auth/loginAsync", async ({ email, password, navigate }) => {
  try {
    const { data } = await http().post(`/auth/login`, { email, password });

    if (data.results.role === "user") {
      console.log("masuk user");
      navigate("/");
    }
    if (data.results.role === "admin") {
      console.log("masuk admin");
      navigate("/movie/manage");
    }

    return data.results;
  } catch (err) {
    return err.response.data.message;
  }
});

export const registerAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, phoneNumber, email, password, navigate }) => {
  const { data } = await http().post(`/auth/register`, { firstName, lastName, phoneNumber, email, password });

  if (data.results.role === "user") {
    navigate("/");
  }

  return data.results;
});

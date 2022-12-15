import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const createTransaction = createAsyncThunk("transaction/create", async ({ token, ...payload }) => {
  try {
    const { data } = await http(token).post("/createTransaction", payload);
    return data.results;
  } catch (err) {
    console.log(err);
  }
});

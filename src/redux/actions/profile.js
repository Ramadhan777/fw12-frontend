import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import { data } from "autoprefixer";

export const getProfilePicture = createAsyncThunk('get/picture', async (token) => {
    try {
        const {data} = await http(token).get('/profile')
        return data.results
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
})
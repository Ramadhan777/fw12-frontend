import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProfilePicture = createAsyncThunk('get/picture', async (token) => {
    try {
        const {data} = await http(token).get('/profile')
        return data.results
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
})

export const uploadProfilePicture = createAsyncThunk('post/picture', async ({token, form}) => {
    try{
        const { data } =  await http(token).patch("/profile/upload", form);
        return data.results
    } catch(error){
        console.log(error)
        return error.response.data.message
    }
})
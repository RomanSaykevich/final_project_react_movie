import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {videoServices} from "../../services";

const initialState = {
    videos: null
}

export const getMovieVideo = createAsyncThunk(
    'movieSlice/getMovieVideo',
    async (id, {dispatch}) => {
        try {
            const movieVideo = await videoServices.getVideo(id)
            dispatch(movieVideoDispatch(movieVideo))
        } catch (e) {}
    }
);

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {
        movieVideoDispatch: (state, action) => {
            state.videos = action.payload
        },
    }
})

const videoReducer = videoSlice.reducer;

export const {movieVideoDispatch} = videoSlice.actions;

export {videoReducer};
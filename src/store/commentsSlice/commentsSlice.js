import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsServices} from "../../services";

const initialState={
    comments: []
}

export const getMovieComments = createAsyncThunk(
    'commentsSlice/getMovieComments',
    async (id, {dispatch}) => {
        try {
            const movieComments = await commentsServices.commentsById(id)
            dispatch(movieCommentsDispatch(movieComments))
        } catch (e) {}
    }
);
const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        movieCommentsDispatch: (state, action) => {
            state.comments = action.payload
        },
    },
});

const commentsReducer = commentsSlice.reducer;

export const {movieCommentsDispatch} = commentsSlice.actions;

export {commentsReducer};
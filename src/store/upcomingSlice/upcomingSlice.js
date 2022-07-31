import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {upcomingServices} from "../../services";

export const getUpcoming = createAsyncThunk(
    'upcomingSlice/getUpcoming',
    async (_, {dispatch}) => {
        try {
            const upcoming = await upcomingServices.getUpcoming()
            dispatch(movieUpcomingDispatch(upcoming))
        } catch (e) {}
    }
);

const upcomingSlice = createSlice({
    name: 'upcomingSlice',
    initialState: {
        upcoming: [],
        statusUpcoming: true,
    },

    reducers: {
        movieUpcomingDispatch: (state, action) => {
            state.statusUpcoming = true
            state.upcoming = action.payload
            state.statusUpcoming = false
        },
    }
});
const upcomingReducer = upcomingSlice.reducer;

export const {movieUpcomingDispatch} = upcomingSlice.actions;

export {upcomingReducer};
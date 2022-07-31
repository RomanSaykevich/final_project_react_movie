import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {serialsServices} from "../../services";

const initialState={
    tv: [],
    statusTv: true
}

export const serialList = createAsyncThunk(
    'serialSlice/serialList',
    async (_, {dispatch}) => {
        try {
            const tv = await serialsServices.getSerial()
            dispatch(serialDisp(tv))
        } catch (e) {}
    }
);

export const serialPage = createAsyncThunk(
    'serialSlice/serialPage',
    async (page, {dispatch}) => {
        try {
            const newTvPage = await serialsServices.getSerialPage(page)
            dispatch(serialPageDisp(newTvPage))
        } catch (e) {}
    }
);

const serialSlice = createSlice({
    name: 'serialSlice',
    initialState,
    reducers: {
        serialPageDisp: (state, action) => {
            state.tv = action.payload
        },
        serialDisp: (state, action) => {
            state.statusTv = true
            state.tv = action.payload
            state.statusTv = false
        }
    }
});
const serialReducer = serialSlice.reducer;

export const {serialPageDisp, serialDisp,} = serialSlice.actions;

export {serialReducer};
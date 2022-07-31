import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchServices} from "../../services";

export const searchMovie = createAsyncThunk(
    'searchSlice/searchMovie',
    async (keyword, {dispatch}) => {
        try {
            const searchResult = await searchServices.search(keyword)
            dispatch(searchResultDispatch(searchResult))
        } catch (e) {}
    }
);

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchResults: [],
        statusSearchResults: true,
    },
    reducers: {
        searchResultDispatch: (state, action) => {
            state.statusSearchResults = true
            state.searchResults = action.payload
            state.statusSearchResults = false
        }
    }
});

const searchReducer = searchSlice.reducer;

export const {searchResultDispatch} = searchSlice.actions;

export {searchReducer};
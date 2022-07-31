import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {genreServices} from "../../services";

const initialState = {
        genres: [],
        genreList: [],
        statusGenres: true,
        statusByGenreList: true,
}

export const paginationGenre = createAsyncThunk(
    'genreSlice/pagination',
    async ({genreId, page}, {dispatch}) => {
        try {
            const newPageGenres = await genreServices.paginationGenre(genreId, page)
            dispatch(reloadPageGenre(newPageGenres))
        } catch (e) {}
    }
);

export const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {dispatch}) => {
        try {
            const genres = await genreServices.genreList()
            dispatch(movieGenresDispatch(genres))
        } catch (e) {}
    }
);

export const getGenreList = createAsyncThunk(
    'genreSlice/getGenreList',
    async (id, {dispatch}) => {
        try {
            const movieByGenre = await genreServices.getGenre(id)
            dispatch(movieGenreDispatch(movieByGenre))
        } catch (e) {}
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        reloadPageGenre: (state, action) => {
            state.genreList = action.payload
        },
        movieGenresDispatch: (state, action) => {
            state.statusGenres = true
            state.genres = action.payload
            state.statusGenres = false
        },
        movieGenreDispatch: (state, action) => {
            state.statusByGenreList = true
            state.genreList = action.payload
            state.statusByGenreList = false
        },
    }
});

const genreReducer = genreSlice.reducer;

export const {movieGenreDispatch, reloadPageGenre, movieGenresDispatch} = genreSlice.actions;

export {genreReducer};
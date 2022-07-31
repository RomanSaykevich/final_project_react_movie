import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_, {rejectWithValue}) => {
        try {
            const movie = await movieServices.getAll()
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async (_, {rejectWithValue}) => {
        try {
            const popular = await movieServices.getMoviePopular()
            return popular
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const pagination = createAsyncThunk(
    'movieSlice/pagination',
    async (page, {dispatch}) => {
        try {
            const newPage = await movieServices.paginationMovie(page)
            dispatch(reloadPage(newPage))
        } catch (e) {}
    }
);

export const getMovieInfo = createAsyncThunk(
    'movieSlice/getMovieInfo',
    async (id, {dispatch}) => {
        try {
            const movieDetails = await movieServices.movieInfo(id)
            dispatch(movieInfoDispatch(movieDetails))
        } catch (e) {}
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        movieInfo: null,
        popular: [],
        status: null,
        statusInfo: true,
        statusPopular: null,
        error: null,
        errorPopular: null
    },

    reducers: {
        reloadPage: (state, action) => {
            state.movies = action.payload
        },

        movieInfoDispatch: (state, action) => {
            state.statusInfo = true
            state.movieInfo = action.payload
            state.statusInfo = false
        },
    },
    extraReducers: {
        [getAllMovie.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getPopular.pending]: (state) => {
            state.statusPopular = 'pending'
            state.errorPopular = null
        },
        [getPopular.fulfilled]: (state, action) => {
            state.statusPopular = 'fulfilled'
            state.popular = action.payload
        },
        [getPopular.rejected]: (state, action) => {
            state.statusPopular = 'rejected'
            state.errorPopular = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {reloadPage, movieInfoDispatch} = movieSlice.actions;

export {movieReducer};
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {actorsServices} from "../../services";

const initialState ={
    actor: [],
    statusActor: true,
}

export const getMovieActor = createAsyncThunk(
    'actorSlice/getMovieActor',
    async (id, {dispatch}) => {
        try {
            const movieActor = await actorsServices.getActor(id)
            dispatch(movieActorDispatch(movieActor))
        } catch (e) {}
    }
);

const actorSlice = createSlice({
    name: 'actorSlice',
    initialState,
    reducers: {
        movieActorDispatch: (state, action) => {
            state.statusActor = true
            state.actor = action.payload
            state.statusActor = false
        }
    }
})

const actorReducer = actorSlice.reducer;

export const {movieActorDispatch} = actorSlice.actions;

export {actorReducer};
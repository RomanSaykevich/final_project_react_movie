import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice/movieSlice";
import {actorReducer} from "./actorsSlice/actorSlice";
import {videoReducer} from "./videoSlice/videoSlice";
import {genreReducer} from "./genreSlice/genreSlice";
import {searchReducer} from "./searchSlice/searchSlice";
import {upcomingReducer} from "./upcomingSlice/upcomingSlice";
import {serialReducer} from "./serialSlice/serialSlice";
import {commentsReducer} from "./commentsSlice/commentsSlice";

const store = configureStore({
    reducer:{
        movieReducer,
        actorReducer,
        videoReducer,
        genreReducer,
        searchReducer,
        upcomingReducer,
        serialReducer,
        commentsReducer,
    }
});

export {store};
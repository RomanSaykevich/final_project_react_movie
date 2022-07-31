import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./tv.module.css";

import {MoviesList} from "../MoviesList/MoviesList";
import {serialList, serialPage} from "../../store";

const TvPage = () => {
    const {tv: {results, page, total_pages}, statusTv} = useSelector(state => state['serialReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(serialList());
    }, []);

    return (
        <div className={css.tvWrap}>
            <div>
                {statusTv && <h1>Loading...</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(serialPage(page - 1))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(serialPage(page + 1))}>next</button>
            </div>
        </div>
    );
};

export {TvPage};
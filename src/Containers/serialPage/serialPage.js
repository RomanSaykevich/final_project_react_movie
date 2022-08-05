import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {serialList, serialPage} from "../../store";
import {MoviesList} from "../../components";
import css from "./serial.module.css";

const SerialPage = () => {

    const {tv: {results, page, total_pages}, statusTv} = useSelector(state => state['serialReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(serialList());
    }, []);

    return (
        <div className={css.serialWrap}>
            <div>
                {statusTv && <h1>Loading...</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(serialPage(page - 1))}>НАЗАД
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(serialPage(page + 1))}>ВПЕРЕД</button>
            </div>
        </div>
    );
};

export {SerialPage};
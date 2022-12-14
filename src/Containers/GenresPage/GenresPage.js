import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {MoviesList} from "../../components";
import {getGenreList, paginationGenre} from "../../store";
import css from './generesPage.module.css'

const GenresPage = () => {

    const dispatch = useDispatch();

    const {genreId} = useParams();

    const {
        genreList: {results, page, total_pages},
        statusByGenreList
    } = useSelector(state => state['genreReducer']);

    useEffect(() => {
        dispatch(getGenreList(genreId))
    }, [genreId]);

    return (
        <div>
            <div className={css.moviePageWrap}>
                {statusByGenreList && <h1>Loading...</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button
                    onClick={() => page > 1 && dispatch(paginationGenre({genreId: genreId, page: page - 1}))}>НАЗАД
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(paginationGenre({
                    genreId: genreId,
                    page: page + 1
                }))}>ВПЕРЕД
                </button>
            </div>

        </div>
    );
};

export {GenresPage};
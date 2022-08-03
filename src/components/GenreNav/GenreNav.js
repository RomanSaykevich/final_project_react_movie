import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {getGenres} from "../../store";
import css from './genre.module.css'


const GenreNav = () => {
    const dispatch = useDispatch();
    const {genres: {genres}, statusGenres} = useSelector(state => state['genreReducer']);

    useEffect(() => {
        dispatch(getGenres())
    }, []);

    return (
        <div className={css.genreWrap}>
            {statusGenres && <h1>Loading...</h1>}
            <div className={css.links}>

                <div className={css.titleBlock}>
                    <h3>Жанри</h3>
                </div>

                <div className={css.navLinkBlock}>
                    {genres && genres.map(genre =>
                        <NavLink key={genre.id} to={`/genreList/${genre.id}`}>{genre.name[0].toUpperCase() + genre.name.slice(1)}</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export {GenreNav};
import React from 'react';
import {NavLink} from "react-router-dom";

import css from './movieList.module.css';
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesList = ({
                        movie: {
                            id,
                            title,
                            first_air_date,
                            overview,
                            poster_path,
                            release_date,
                            vote_average,
                            name
                        }
                    }) => {

    const year = release_date ? release_date.toString().slice(0, 4) : first_air_date.toString().slice(0, 4);

    function truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    };

    return (
        <div className={css.movieItem}>
            <NavLink to={`/movie/${id}`} state={vote_average}>

                    <div className={css.titleBlock}>
                        <h2>{title ? title : name} ({year})</h2>
                    </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
                    <div className={css.starBlock}>
                        <h4>Рейтинг: </h4> <StarsRating id={id} ratingDB={vote_average / 2}/> <h4>{vote_average}</h4>
                    </div>
                </div>
            </NavLink>

            <div className={css.overview}>
                <h4>{truncate(overview)}</h4>
                <br/>
                <br/>
                <div className={css.dateReleas}>
                    <p>Дата виходу: {release_date ? release_date : first_air_date} </p>
                </div>
            </div>
        </div>
    );
};

export {MoviesList};
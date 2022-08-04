import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation, useParams} from "react-router-dom";

import {getMovieActor, getMovieComments, getMovieInfo, getMovieVideo} from "../../store";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './movieInfo.module.css';

const MovieInfo = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

    const {movieInfo, statusInfo} = useSelector(state => state['movieReducer']);

    const {comments: {results: comments}} = useSelector(state => state['commentsReducer']);

    const {actor} = useSelector(state => state['actorReducer']);

    const {videos} = useSelector(state => state['videoReducer']);

    const actors = actor.cast && actor.cast.filter(item => item.popularity > 10);

    const posterPath = 'https://image.tmdb.org/t/p/w500';

    const defUrl = 'https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg';

    const base = 'https://secure.gravatar.com/avatar/';

    useEffect(() => {
        dispatch(getMovieInfo(id));
        dispatch(getMovieComments(id));
        dispatch(getMovieVideo(id));
        dispatch(getMovieActor(id));
    }, [id]);

    const video = (videos && videos.results.length) ? videos.results[0].key : '';

    function truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }

    const {state: vote_average} = useLocation();

    return (
        <div className={css.movieInfoWrap}>
            {statusInfo && <h1>Loading...</h1>}
            {
                movieInfo &&
                <div className={css.allContent}>
                    <div className={css.titleBlock}>
                        <h1>{movieInfo.title} ({movieInfo.release_date.toString().slice(0, 4)})</h1>
                    </div>

                    <div className={css.imgInfoBlock}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title}/>
                        </div>

                        <div>
                            <ul>

                                <div className={css.infoBlock}>
                                    {vote_average && <div><h3>Рейтинг:</h3> <StarsRating
                                        ratingDB={vote_average / 2}/>
                                        <h4>{vote_average}</h4></div>}
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Рік: <span>{movieInfo.release_date.toString().slice(0, 4)}</span></h3>
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Країна: <span>{movieInfo && movieInfo.production_countries.map(item => <span
                                        key={item.name}>{item.name}</span>)}</span>
                                    </h3>
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Жанр: <span>{movieInfo && movieInfo.genres.map((item, i) => <span
                                        key={i}><NavLink
                                        to={`/genreList/${item.id}`}>{item.name}</NavLink>, </span>)}</span>
                                    </h3>
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Тривалість: <span>{movieInfo.runtime} мин.</span></h3>
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Світова прем'єра: <span>{movieInfo.release_date}</span></h3>
                                </div>

                                <div className={css.infoBlock}>
                                    <h3>Актори: {actors && actors.map(actor => <span
                                        key={actor.id}>{actor.name},</span>)}</h3>
                                </div>

                            </ul>
                        </div>
                    </div>

                    <div className={css.lastInfo}>
                        <div className={css.over}>
                            <div className={css.blockOver}>
                                <h2>Про що фільм - {movieInfo.title}:</h2>

                            </div>
                            <div className={css.overview}>
                                <p>{movieInfo.overview}</p>
                            </div>
                        </div>

                    </div>

                    <div className={css.video}>
                        {videos && video ?
                            <iframe width="1024" height="720"
                                    src={`https://www.youtube.com/embed/${video}?append_to_response=videos`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            : <div className={css.error}><h1>Це відео не доступне в даному регіоні!!!</h1></div>
                        }
                    </div>

                    <div className={css.commentsWrap}>
                        {comments && comments.map(comment =>
                            <div className={css.comments} key={comment.id}>
                                <div className={css.commentsTitle}>
                                    <img
                                        src={comment.author_details.avatar_path === null ? defUrl : comment.author_details.avatar_path.includes(base) ?
                                            comment.author_details.avatar_path.replace(/^./, "") : base + comment.author_details.avatar_path}
                                        alt={comment.id}
                                    />
                                    <span> {comment.author}</span>
                                </div>
                                <div className={css.content}>{truncate(comment.content, 200)}</div>
                            </div>)}
                    </div>
                </div>
            };
        </div>
    );
};

export {MovieInfo};
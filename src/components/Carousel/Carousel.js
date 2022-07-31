import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import css from "./carousel.module.css";
import {TopMovie} from "../TopMovie/TopMovie";
import {getPopular} from "../../store";

const Carousel = () => {
    const {popular, statusPopular} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopular())
    }, []);

    return (
        <div className={css.carousel}>
            {statusPopular === 'pending' && <h1>Loading...</h1>}
            <div className={css.carouselWrap}>


                <div className={css.vert}><h3> ЗАРАЗ ПОПУЛЯРНІ: </h3>
                    {popular.results && popular.results.map(movieTop => <TopMovie key={movieTop.id}
                                                                                  movie={movieTop}/>)}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
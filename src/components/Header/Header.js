import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './header.module.css';


import {searchMovie} from "../../store";
import Carousel from "../Carousel/Carousel";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(searchMovie(e.target.searchMovie.value.toLowerCase()));
        navigate('/search');
        e.target.reset();
        return
    }

    return (
        <div className={css.headerWrap}>
            <div className={css.logo}>
                <NavLink to={'/'}>
                    <img src={"http://logos.textgiraffe.com/logos/logo-name/Roma-designstyle-jungle-m.png"} alt=""/>
                </NavLink>
            </div>

            <div className={css.navPanel}>
                <NavLink to={'/'}><span>ГОЛОВНА</span></NavLink>
                <NavLink to={'/latest'}><span>НОВИНКИ</span></NavLink>
                <NavLink to={'/tv'}><span>СЕРІАЛИ</span></NavLink>
            </div>

            <div className={css.headerInput}>
                <form onSubmit={submit}>
                    <input type={'text'} name={'searchMovie'} placeholder={'Пошук'}/>
                    <button>Пошук</button>
                </form>
                <Carousel/>
            </div>
        </div>
    );
};

export {Header};
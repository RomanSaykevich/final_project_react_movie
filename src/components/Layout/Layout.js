import React from 'react';
import {Outlet} from "react-router-dom";

import css from './layout.module.css';
import Upcoming from "../Upcoming/Upcoming";
import {Header} from "../Header/Header";
import {GenreNav} from "../GenreNav/GenreNav";

const Layout = () => {
    return (
        <div className={css.wrapLayout}>
            <Header/>
            <div className={css.moviePageWrap}>
                <div className={css.navigate}><span>Навігація</span></div>
                <GenreNav/>
                <Upcoming/>

                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};
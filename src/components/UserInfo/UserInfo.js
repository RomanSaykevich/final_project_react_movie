import React from 'react';

import css from './userInfo.module.css';

const UserInfo = () => {


    return (
        <div className={css.user}>
            <img src={'https://sampik.ru/uploads/fotos/foto_29.png'} alt={'avatar'}/>
            Roma Saykevich
        </div>
    );
};

export {UserInfo};
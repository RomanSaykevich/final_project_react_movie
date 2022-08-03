import React from 'react';

import css from './userInfo.module.css';

const UserInfo = () => {
    const defUrl = 'https://sampik.ru/uploads/fotos/foto_29.png';

    return (
        <div className={css.user}>
            <img src={defUrl} alt={'avatar'}/>
            Roma Saykevich
        </div>
    );
};

export {UserInfo};
import React from 'react';
import {cx, css} from '@emotion/css';
import {flexCenter} from '../../varsCss';


const Logo = () => {
    return (
        <a className={css`
        ${flexCenter}
        `} href="index.html"><img className={css`
        margin-right: 8px`} src="img/header__logo.svg" alt="Логотип Devias Kit" /><span className={css`
        color: #fff;
        font-weight: 500;
        line-height: 24px;
        font-size: 20px;`}>Devias Kit</span></a>
)       
}

export default Logo;
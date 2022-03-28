import React from 'react';
import {cx, css} from '@emotion/css';
import { periwinkle } from '../../varsCss';


const Advertisment = () => {
    return (
        <span className={css`
        margin-right: auto;
        color: ${periwinkle};
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        background-image: url("img/header__free.svg");
        background-repeat: no-repeat;
        background-position: 6px center;
        padding: 7px 16px 7px 52px;
        background-color: rgba(51, 51, 51, 0.23);
        border-radius: 4px;
            @media (max-width: 1130px) {
                display: none;
            }`
        }>See our PRO version for more design components & coded in React follow this link: <a className={css`color: #fff;`} href="#">https://devias.io/products/devias-kit-pro</a></span>
)       
}

export default Advertisment;
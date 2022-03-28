import React from 'react';
import {cx, css} from '@emotion/css';
import { btnReset } from '../../varsCss';
import { burgerClose } from '../../varsCss';


const BurgerClose = () => {
    return (
        <button className={css`
        display: none;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        @media (max-width: 1045px) {
            display: block;
        }
        ${btnReset}
        `} id="burger__close">
            <div className={css`
            ${burgerClose}
            transform: rotate(45deg);
            `}></div>
            <div className={css`
            ${burgerClose}
            transform: rotate(-45deg);
            `}></div>
        </button>
)       
}

export default BurgerClose;
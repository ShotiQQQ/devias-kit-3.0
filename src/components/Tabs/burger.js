import React from 'react';
import {cx, css} from '@emotion/css';
import { btnReset, tabsBurgerLine } from '../../varsCss';


const Burger = () => {
    return (
        <li className={css`
        display: none;
        @media (max-width: 1045px) {
            display: block;
        }
        `}>
            <button className={css`
            display: block;
            width: 30px;
            height: 30px;
            ${btnReset}
            `} id="burger">
                <div className={css`
                ${tabsBurgerLine}
                `}></div>
                <div className={css`
                ${tabsBurgerLine}
                `}></div>
                <div className={css`
                ${tabsBurgerLine}
                `}></div>
            </button>
        </li>
)       
}

export default Burger;
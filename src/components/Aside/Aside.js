import React from 'react';
import {cx, css} from '@emotion/css';
import BurgerClose from './burgerClose';
import User from './user';
import Line from './line';
import Navbar from './navbar';
import Support from './support';


const Aside = () => {
    return (
    <aside className={css`
    display: flex;
    flex-direction: column;
    max-width: 270px;
    background-color: #fff;
    border-right: 1px solid rgba(63, 63, 68, 0.2);
    transition: display .3s ease;
    grid-area: aside;
    height: 100%;
    padding: 0 16px;
    @media (max-width: 1045px) {
        display: none;
    }`} id="aside">
        <BurgerClose />
        <User />
        <Line />
        <Navbar />
        <Line />
        <Support />
    </aside>
)     
}

export default Aside;
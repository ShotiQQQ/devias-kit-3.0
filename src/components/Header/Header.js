import React from 'react';
import Logo from './logo'
import {cx, css} from '@emotion/css';
import Advertisment from './advertisment';
import Control from './control';
import {violetBlue, flexCenter} from '../../varsCss';

const Header = () => {
    return (
    <header className={css`
    padding-top: 14px;
    padding-bottom: 14px;
    background-color: ${violetBlue};
    grid-area: header;
    `}>
        <div className={css`
        ${flexCenter}
        padding: 0 20px;
        margin: 0 auto;
        `}>
            <div className={css`
            ${flexCenter}
            margin-right: 40px;
            @media (max-width: 1130px) {
                margin-right: auto;
            }
            `}>
                <Logo />
            </div>
            <Advertisment />
            <Control />
        </div>
    </header>
)       
}

export default Header;